import React, { Component } from 'react';
import mockAPI from '../api/mockAPI';
import './App.css';

class App extends Component {

  state = {};

  async componentDidMount() {
    let response = await mockAPI();
    const events = {};

    response.mockResponse.events.forEach(({imageSource, predictions, timestamp, videoStream}) => {
      if (!events[videoStream]) { events[videoStream] = {}; }
      events[videoStream][timestamp] = {imageSource, predictions}
      });
    this.setState({events})
  };


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
