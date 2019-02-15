import React from 'react'
import EventCard from './EventCard';

export default function EventIndex({events, searchTerm, minScore}) {
  const eventCards = events
    // if a label filter was applied, filter it out by label and minScore
    .filter(event => {
      if (searchTerm === '') { return true; }

      return event.predictions.some(prediction => {
        return prediction.scores.some(score => {
            return score.label === searchTerm && score.score >= minScore
        })
      })
    })
    // 
    .map(event => {
      const {timestamp, videoStream} = event;
      return (
        <EventCard
          key={`${videoStream} ${timestamp}`}
          event={event}
        />
      )
    })

  return (
    <div>
      {eventCards}
    </div>
  )
}
