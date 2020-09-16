import React, { useState } from 'react'

import { leaderboardRef } from '../firebase';
import { ONE_MINUTE_MS } from '../utils/constants';
import Countdown from './Countdown';
import UserInput from './UserInput';
import { getDeviceType } from '../utils/utils';

const Game = () => {
  const [score, setScore] = useState(0);
  const [clock, setClock] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    if (gameStarted) return;
    setGameStarted(true);
    const now = Date.now();
    setClock(now + ONE_MINUTE_MS - 55000);
  }

  const gameOver = async () => {
    setGameStarted(false);

    await leaderboardRef.add({
      name: 'rck',
      score,
      device: getDeviceType()
    }).catch(error => {
      console.error("Error adding document: ", error);
    });

    setScore(0);
  }

  const loadLeaderboard = async () => {
    const leaderboardResults = await leaderboardRef.get();
    const leaderboard = await leaderboardResults.docs.map(doc => doc.data())
    console.log(leaderboard);
  }
  loadLeaderboard()

  return (
    <>
      <header>
        <span>
          <strong>Score</strong>: {score}
        </span>
        {gameStarted && <Countdown
          date={clock}
          onEnd={gameOver}
        />}
      </header>
      <UserInput
        clock={clock}
        setClock={setClock}
        score={score}
        setScore={setScore}
        gameStarted={gameStarted}
        startGame={startGame}
      />
      <button disabled={gameStarted} onClick={startGame}>{gameStarted ? 'GAME STARTED' : 'START GAME'}</button>
    </>
  )
}

export default Game
