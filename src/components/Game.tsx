import React, { useState } from 'react'
import Swal from 'sweetalert2';


import { leaderboardRef } from '../firebase';
import { ONE_MINUTE_MS } from '../utils/constants';
import Countdown from './Countdown';
import UserInput from './UserInput';

const Game = () => {
  const [score, setScore] = useState(0);
  const [clock, setClock] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    if (gameStarted) return;
    setGameStarted(true);
    const now = Date.now();
    setClock(now + ONE_MINUTE_MS);
  }

  const gameOver = () => {
    setGameStarted(false);
    Swal.fire({
      title: `Game Over. Score: ${score}`,
      html: `Add your name to the leaderboard.`,
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Save',
      input: 'text',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'BAMBOOZLED!!1',
          'Feature not implemented yet.',
          'success'
        )
      }
    })

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
