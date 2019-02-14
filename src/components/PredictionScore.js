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
    <table className="border inline-block" style={{borderColor: `${color}`}}>
      <th><h4>{idx}</h4></th>
      {scores}
    </table>
  )
}
