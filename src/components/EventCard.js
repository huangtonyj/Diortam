// import React from 'react'

// export default function EventCard({event}) {
//   const {imageSource, predictions, timestamp, videoStream} = event;

//   console.log(predictions);
//   return (
  //     <div className="event-card">
  //       <img src={imageSource} alt={`${videoStream} ${timestamp}`}/>
  //       <div className="prediction-box"></div>
  //     </div>
  //   )
  // }
  
  
  import React, { Component } from 'react'
  
  export default class EventCard extends Component {
    constructor(props) {
      super(props);
      this.state = {dimensions: {}};
    }
    
    onImgLoad = ({target: img}) => {
      // console.log(img.offsetHeight);
      // console.log(img.offsetWidth);
      this.setState({
        h: img.offsetHeight, 
        w: img.offsetWidth
      })
    }
    
    render() {
      const {imageSource, predictions, timestamp, videoStream} = this.props.event;
      return (
        <div>
          <img 
            src={imageSource} 
            alt={`${videoStream} ${timestamp}`}
            onLoad={this.onImgLoad}
          />
          <div className="prediction-box"></div>
        </div>
      )
    }
}
