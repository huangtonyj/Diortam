import React from 'react'

export default function PredictionBox({img, boundingBox, idx, color}) {
  return (
    <div className="prediction-box"
      style={{
        top: `${img.h * boundingBox.top}px`,
        left: `${img.w * boundingBox.left}px`,
        height: `${img.h * boundingBox.height}px`,
        width: `${img.w * boundingBox.width}px`,
        border: `1px solid ${color}`,
        color: `${color}`
      }}
    >

    {idx}

    </div>
  )
}
