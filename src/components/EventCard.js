import React, { Component } from 'react'
import PredictionBox from './PredictionBox';

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

    return (
      <div className="event-card">
        <img 
          src={imageSource}
          alt={`${videoStream} ${timestamp}`}
          onLoad={this.onImgLoad}
        />

        {predictionBoxes}
      </div>
    )
  }
}

const COLORS = ['red', 'yellow', 'white', 'pink'];
