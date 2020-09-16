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
    }).then(docRef => {
      console.log("Document written with ID: ", docRef.id);
    }).catch(error => {
      console.error("Error adding document: ", error);
    });

    //   on('value', snapshot => {
    //   const scoreBoard = snapshot.val();

    // })
    setScore(0);
  }

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
