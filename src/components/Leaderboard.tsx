import React, { Fragment, useEffect, useState } from 'react'
export interface ILeaderboard {
  name: string;
  device: string;
  score: number;
}

interface ILeaderboardData {
  leaderboard: ILeaderboard[]
}

const Leaderboard = ({ leaderboard }: ILeaderboardData) => {
  const [data, setData] = useState(leaderboard);

  useEffect(() => {
    setData(leaderboard)
  }, [leaderboard])

  return (
    <>
    <h3>Leaderboard</h3>
    <ul className='leaderboard'>
      <li><strong>Name</strong></li>
      <li><strong>Device</strong></li>
      <li><strong>Score</strong></li>
        {data.map((entry, i) => (
        <Fragment key={i}>
          <li>{entry.name}</li>
          <li>{entry.device}</li>
          <li>{entry.score}</li>
        </Fragment>
      ))}
      </ul>
    </>
  )
}

export default Leaderboard
