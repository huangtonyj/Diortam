import React from 'react'

export default function PredictionScore({scores, idx, color}) {
  console.log(scores)

  scores = scores.map(score => {
    return (
      <tr>
        <td style={{borderColor: `${color}`}}>
          {score.label}
        </td>
        <td style={{borderColor: `${color}`}}>
          {score.score}
        </td>
      </tr>
    )
  })

  return (
    <table className="ui celled table" style={{borderColor: `${color}`}}>
      {scores}
    </table>
  )
}
