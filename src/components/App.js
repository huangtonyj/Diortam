import React, { Component } from 'react';
import mockAPI from '../api/mockAPI';
import './App.css';
import EventCard from './EventCard';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      minScore: 70,
      events: []
    }
  }

  async componentDidMount() {
    // const response = await mockAPI();
    
    // const events = {};
    // response.mockResponse.events.forEach(({imageSource, predictions, timestamp, videoStream}) => {
    //     if (!events[videoStream]) { events[videoStream] = {}; }
    //     events[videoStream][timestamp] = {imageSource, predictions}
    //     });
    //   this.setState({events})
      
    const events = await mockAPI();
    this.setState({events: events.mockResponse.events})
  };

  onSliderChange = (e) => {
    this.setState({minScore: e.target.value})
  }


  render() {
    // eventsIndex
    // eventDisplay
      // display image
      // location and scores for each prediction
      // shows event time
    // filter eventsIndex
      // text search
      // score at least search

    console.log(this.state);
    
    const eventCards = this.state.events.map(event => {
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
        <div className="four wide column">
          <div class="ui icon input">
            <input type="text" placeholder="Search..."/>
            <i class="search icon"></i>
          </div>

          <div class="slidecontainer">
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={this.state.minScore}
              onChange={(e) => this.onSliderChange(e)}
              class="slider"
            />
            {this.state.minScore}
          </div>
          
        </div>

        <div className = "twelve wide column">
          {eventCards}
        </div>

      </div>
    );
  }
}

export default App;
