import React, { Dispatch, SetStateAction, useRef, useState } from 'react'
import { leaderboardRef } from '../firebase';
import { getDeviceType } from '../utils/utils';

interface IGameOver {
  score: number;
  setGameIsOver: Dispatch<SetStateAction<boolean>>;
  setScore: Dispatch<SetStateAction<number>>
}
const device = getDeviceType();

const GameOver = ({ score, setGameIsOver, setScore }: IGameOver) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  const updateLeaderboard = async () => {
    const name = nameRef.current?.value || 'Player';
    setLoading(true);
    await leaderboardRef.add({
      name,
      score,
      device
    }).catch(error => {
      console.error("Error adding document: ", error);
    });
    setLoading(false);
    setSaved(true);
  }

  const newGame = () => {
    setScore(0)
    setGameIsOver(false)
  };

  return (
    <>
      {
        saved
          ? <>
              <h4>Score saved to the leaderboard!</h4>
              <button onClick={newGame}>New Game</button>
            </>
          : <>
            <h4>Add yourself to the leaderboard</h4>

            <label htmlFor="leaderboardName">Your name:</label>
            <input ref={nameRef} id="leaderboardName" name="leaderboardName" />
            <button onClick={updateLeaderboard}>
              {loading ? 'Saving...' : 'Save score to Leaderboard'}
            </button>
          </>
      }

    </>
  )
}

export default GameOver
