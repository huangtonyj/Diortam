import React from 'react'

export default function PredictionScore({scores, idx, color}) {
  console.log(scores)

  scores = scores.map(score => {
    return (
      <tr>
        <td>{score.label}</td>
        <td>{score.score}</td>
      </tr>
    )
  })

  return (
    <table className="ui celled table">
      {scores}
    </table>
  )
}
