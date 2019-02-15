import React, { Component } from 'react';
import mockAPI from '../api/mockAPI';
import './App.css';

import { Divider } from 'semantic-ui-react'
import InputFilter from './InputFilter';
import Slider from './Slider';
import ButtonGroup from './ButtonGroup';
import EventIndex from './EventIndex';

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
    // Create a fake async API request
    const response = await mockAPI(); 
    const events = {};
    const predictionLabels = new Set();

    response.mockResponse.events.forEach(({imageSource, predictions, timestamp, videoStream}) => {
      
      // Generate a list of labels to filter by.
      predictions.forEach(prediction => {
        prediction.scores.forEach(score => {
          predictionLabels.add(score.label);
        })
      })

      // Dissect arr of events data and classify it by videoStream for fast filtering
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

          <EventIndex
            // Pass array of selected videoSource events
            events={events[selectedVideoStream]} 
            searchTerm={searchTerm}
            minScore={minScore}
          />
        </div>

      </div>
    );
  }
}

export default App;
