import React, {useContext, useRef, useState } from 'react'
import { leaderboardRef } from '../firebase';
import { getDeviceType } from '../utils/utils';
import { AppContext } from './App';


const device = getDeviceType();

const GameOver = () => {

  const { score, setGameIsOver, setScore, setscores } = useContext(AppContext);

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
    setscores!(Date.now());
    setSaved(true);
  }

  const newGame = () => {
    setScore!(0)
    setGameIsOver!(false)
    setSaved(false)
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
            <input
              ref={nameRef}
              id="leaderboardName"
              name="leaderboardName"
              maxLength={20}
            />
            <button onClick={updateLeaderboard}>
              {loading ? 'Saving...' : 'Save score to Leaderboard'}
            </button>
          </>
      }

    </>
  )
}

export default GameOver
