import React, {Fragment} from 'react'

export interface ILeaderboard {
  name: string;
  device: string;
  score: number;
}
const Leaderboard = (props: ILeaderboard[]) => {

  return (
    <ul>
      <li><strong>Name</strong></li>
      <li><strong>Device</strong></li>
      <li><strong>Score</strong></li>
      {props.map((entry, i) => (
        <Fragment key={i}>
          <li>{entry.name}</li>
          <li>{entry.device}</li>
          <li>{entry.score}</li>
        </Fragment>
      ))}
    </ul>
  )
}

export default Leaderboard
