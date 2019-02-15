import React, { Component } from 'react'
import { Button, Popup } from 'semantic-ui-react'

export default class PredictionBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contextMenuVisible: false
    }
  }

  render() {
    const {img, boundingBox, idx, color} = this.props;

    return (
      <Popup
        trigger={
          <div className="prediction-box"
            style={{
              top: `${img.h * boundingBox.top}px`,
              left: `${img.w * boundingBox.left}px`,
              height: `${img.h * boundingBox.height}px`,
              width: `${img.w * boundingBox.width}px`,
              border: `1px solid ${color}`,
              color: `${color}`
            }}
          > {idx}
          </div>
        }
        content={
          <div>
            <Button 
              color="green"
              onClick={() => console.log('Reporting accurate prediction with POST request')}
              >Report accurate</Button>
            <Button 
              color="red"
              onClick={() => console.log('Reporting error with POST request')}
            >Report error</Button>
          </div>
        }
        on='click'
        hideOnScroll
      />
    )
  }
}
