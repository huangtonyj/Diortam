import React from 'react'
import { Button } from 'semantic-ui-react'

export default function ButtonGroup({buttonsList, active, onVideoStreamChange}) {

  buttonsList = buttonsList.map(button => {
    return (
      <Button
        key={button}
        color={active === button ? "green" : ""}
        onClick={() => onVideoStreamChange(button)}
      > {button}
      </Button>)
  })

  return (
    <Button.Group vertical>
      {buttonsList}
    </Button.Group>
  )
}
