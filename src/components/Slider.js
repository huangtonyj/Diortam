import React from 'react'
import './Slider.css';

export default function Slider({minScore, onSliderChange}) {
  return (
    <div className="slidecontainer">
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={minScore}
        onChange={(e) => onSliderChange(e)}
        className="slider"
      />
      <span> {minScore} </span>
    </div>
  )
}
