import React, { Component } from 'react';
import mockAPI from '../api/mockAPI';
import './App.css';

import { Divider } from 'semantic-ui-react'
import InputFilter from './InputFilter';
import Slider from './Slider';
import ButtonGroup from './ButtonGroup';
import EventCard from './EventCard';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      predictionLabels: [],
      searchTerm: '',
      minScore: 70,
      videoStreams: [],
      selectedVideoStream: '',
      events: {'': []},
    }
  }

  async componentDidMount() {
    const response = await mockAPI();
    const events = {};
    const predictionLabels = new Set();

    response.mockResponse.events.forEach(({imageSource, predictions, timestamp, videoStream}) => {
      
      predictions.forEach(prediction => {
        prediction.scores.forEach(score => {
          predictionLabels.add(score.label);
        })
      })

      if (!events[videoStream]) { events[videoStream] = []; }
      
      events[videoStream].push({
        timestamp,
        imageSource,
        predictions,
      });
    });

    const videoStreams = Object.keys(events);

    this.setState({
      events, 
      videoStreams: videoStreams,
      selectedVideoStream: videoStreams[0],
      predictionLabels: [...predictionLabels],
    })
  };

  onSliderChange = (e) => {
    this.setState({minScore: e.target.value})
  }

  onInputFilterChange = (searchTerm) => {
    searchTerm = searchTerm === '--CLEAR FILTER--' ? '' : searchTerm;
    this.setState({searchTerm})
  }

  onVideoStreamChange = (selectedVideoStream) => {
    this.setState({selectedVideoStream})
  }


  render() {
console.log(this.state);

    const {
      predictionLabels,
      searchTerm,
      minScore,
      videoStreams,
      selectedVideoStream,
      events,
    } = this.state;

    const eventCards = events[selectedVideoStream]
      .filter(event => {
        if (searchTerm === '') { return true; }

        return event.predictions.some(prediction => {
          return prediction.scores.some(score => {
             return score.label === searchTerm && score.score >= minScore
          })
        })
      })
      .map(event => {
      const {timestamp, videoStream} = event;
      return (
        <EventCard
          key={`${videoStream} ${timestamp}`}
          event={event}
        />
      )
    })

    return (
      <div className="App">
        <div className="control-panel">
          <Divider horizontal>
            <h4>Filter Options</h4>
          </Divider>
          
          <InputFilter 
            filterOptions={predictionLabels}
            searchTerm={searchTerm}
            onInputFilterChange={this.onInputFilterChange}
          />

          <Slider
            minScore={minScore}
            onSliderChange={this.onSliderChange}
          />

          <Divider horizontal>
            <h4>Video Source</h4>
          </Divider>
          
          <ButtonGroup
            buttonsList={videoStreams}
            active={selectedVideoStream}
            onVideoStreamChange={this.onVideoStreamChange}
          />         
        </div>

        <div className = "events-index">
          <Divider horizontal>
            <h1>Events for {selectedVideoStream}</h1>
          </Divider>

          {eventCards}
        </div>

      </div>
    );
  }
}

export default App;
