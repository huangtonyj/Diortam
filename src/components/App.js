import React, { Component } from 'react';
import mockAPI from '../api/mockAPI';
import './App.css';
import InputFilter from './InputFilter';
import Slider from './Slider';
import ButtonGroup from './ButtonGroup';
import FilterList from './FilterList';
import EventCard from './EventCard';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      minScore: 70,
      events: {'': []},
      videoStreams: [],
      selectedVideoStream: '',
      predictionLabels: [],
      filteredEvents: []
    }
  }

  async componentDidMount() {
    const response = await mockAPI();
    const events = {};
    const predictionLabels = new Set();

    response.mockResponse.events.forEach(({imageSource, predictions, timestamp, videoStream}) => {
      const currentPredictionLabels = new Set();
      
      predictions.forEach(prediction => {
          prediction.scores.forEach(score => {
            currentPredictionLabels.add(score.label);
            predictionLabels.add(score.label);
          })
      })



      if (!events[videoStream]) { events[videoStream] = []; }
      events[videoStream].push({
        timestamp,
        imageSource,
        predictions,
        currentPredictionLabels
      });
    });

    const videoStreams = Object.keys(events);

    this.setState({
      events, 
      videoStreams: videoStreams,
      selectedVideoStream: videoStreams[0],
      predictionLabels: [...predictionLabels],
    })
      
    // const events = await mockAPI();
    // this.setState({events: events.mockResponse.events})
  };

  onSliderChange = (e) => {
    this.setState({minScore: e.target.value})
  }

  onInputFilterChange = (searchTerm) => {
    this.setState({searchTerm})
  }

  onVideoStreamChange = (selectedVideoStream) => {
    this.setState({selectedVideoStream})
  }


  render() {
    console.log(this.state);
    
    const eventCards = this.state.events[this.state.selectedVideoStream].map(event => {
      const {timestamp, videoStream} = event;
      return (
        <EventCard
          key={`${videoStream} ${timestamp}`}
          event={event}
        />
      )
    })

    return (
      <div className="App ui grid">
        <div className="four wide column padding">
          <InputFilter 
            filterOptions={this.state.predictionLabels}
            searchTerm={this.state.searchTerm}
            onInputFilterChange={this.onInputFilterChange}
          />

          <Slider
            minScore={this.state.minScore}
            onSliderChange={this.onSliderChange}
          />

        <h2>Video Source</h2>
         <ButtonGroup
          buttonsList={this.state.videoStreams}
          active={this.state.selectedVideoStream}
          onVideoStreamChange={this.onVideoStreamChange}
         />



          {/* <FilterList        /> */}


          
        </div>

        <div className = "twelve wide column">
          {eventCards}
        </div>

      </div>
    );
  }
}

export default App;
