import React from 'react'

export default function EventCard({event}) {
  const {imageSource, predictions, timestamp, videoStream} = event;

  console.log(predictions);
  return (
      <div className="event-card">
        <img src={imageSource} alt={`${videoStream} ${timestamp}`}/>
        <div className="prediction-box"></div>
      </div>
    )
  }
  
  

