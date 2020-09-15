import React, { useEffect, useState } from 'react'
import Countdown from './Countdown';
import UserInput from './UserInput';
import { ONE_MINUTE_MS } from '../utils/constants';


const Game = () => {
  const [score, setScore] = useState(0);
  const [clock, setClock] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const onEnd = () => {
    alert('GAME OVER');
    setGameStarted(false);
  }

  const startGame = () => {
    if (gameStarted) return;
    setGameStarted(true);
    const now = Date.now();
    setClock(now + ONE_MINUTE_MS);
  }

  return (
    <>
      <header>
        <span>
          <strong>Score</strong>: {score}
        </span>
        {gameStarted && <Countdown
          date={clock}
          onEnd={onEnd}
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
