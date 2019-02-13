import React from 'react'

export default function PredictionScore({scores, idx, color}) {
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
      <th>{idx}</th>
      {scores}
    </table>
  )
}
