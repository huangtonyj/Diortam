import React, { Component } from 'react';
import mockResponse from '../api/event_data';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // Used setTimeout to mimic an async api call after a random delay.    
    setTimeout(() => this.setState({events: mockResponse}), Math.random() * 1000)
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

    return (
      <div className="App">
        <div className = "ui input" >
          <input type="text" placeholder="Search..."/>
        </div>


      </div>
    );
  }
}

export default App;
