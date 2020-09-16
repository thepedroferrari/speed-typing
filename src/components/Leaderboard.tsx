import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { leaderboardRef } from '../firebase';
interface IScoreboard {
  name: string;
  device: string;
  score: number;
}
interface ILeaderboard {
  scores: number;
}

const Leaderboard = ({ scores }: ILeaderboard) => {
  const [leaderboard, setLeaderboard] = useState<IScoreboard[]>([]);

  const getLeaderboard = useCallback(
    async () => {
      const leaderboardResults = await leaderboardRef.get();
      const promisedLeaderboard = await leaderboardResults.docs.map(doc => doc.data());
      if (promisedLeaderboard.length > 0) {
        const newLeaderboard = Object.values(promisedLeaderboard);
        setLeaderboard(newLeaderboard as IScoreboard[]);
      }
    }, []
  )

  useEffect(() => {
    getLeaderboard();
  }, [scores, getLeaderboard]);

  return (
    <>
    <h3>Leaderboard</h3>
    <ul className='leaderboard'>
      <li><strong>Name</strong></li>
      <li><strong>Device</strong></li>
      <li><strong>Score</strong></li>
        {leaderboard.map((entry, i) => (
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
