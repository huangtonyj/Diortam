import React, { Component } from 'react'
import PredictionBox from './PredictionBox';
import PredictionScore from './PredictionScore';

export default class EventCard extends Component {
  constructor(props) {
    super(props);
    this.state = {img: {h: 0, w: 0}};
  }
  
  onImgLoad = ({target: img}) => {
    this.setState({img: {
      h: img.offsetHeight, 
      w: img.offsetWidth,
    }})
  }
  
  render() {
    const {imageSource, predictions, timestamp, videoStream} = this.props.event;

    const predictionBoxes = predictions.map((prediction, idx) => {
      return (
        <PredictionBox
          key={`${videoStream} ${timestamp} ${idx}`}
          img={this.state.img}
          boundingBox={prediction.boundingBox}
          idx={idx + 1}
          color={COLORS[idx % COLORS.length]}
        />
      )
    })

    const predictionScores = predictions.map((prediction, idx) => {
      return (
        <PredictionScore
          key={`${videoStream} ${timestamp} ${idx}`}
          scores={prediction.scores}
          idx={idx + 1}
          color={COLORS[idx % COLORS.length]}
        />
      )
    })

    // https://stackoverflow.com/questions/4611754/javascript-convert-seconds-to-a-date-object/4611809
    const toDateTime = (secs) =>  {
      const t = new Date(1970, 0, 1);
      t.setSeconds(secs);
      return t;
    }

    return (
      <div className="event-card border">
        <h3>{toDateTime(timestamp).toLocaleString()}</h3>
        <div className="relative">
          <img 
            src={imageSource}
            alt={`${videoStream} ${timestamp}`}
            onLoad={this.onImgLoad}
          />

          {predictionBoxes}
        </div>
      
      <div className="prediction-scores">
        {predictionScores}
      </div>

      </div>
    )
  }
}

const COLORS = ['red', 'yellow', 'white', 'pink'];
