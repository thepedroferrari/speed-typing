import React, { useEffect, useState } from 'react'

import { leaderboardRef } from '../firebase';
import { ONE_MINUTE_MS } from '../utils/constants';
import Countdown from './Countdown';
import UserInput from './UserInput';
import { ILeaderboard } from './Leaderboard';
import Leaderboard from './Leaderboard';
import GameOver from './GameOver';

const Game = () => {
  const [score, setScore] = useState(0);
  const [clock, setClock] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameIsOver, setGameIsOver] = useState(false);
  const [leaderboard, setLeaderboard] = useState<ILeaderboard[]>([])

  const startGame = () => {
    if (gameStarted) return;
    setGameStarted(true);
    const now = Date.now();
    setClock(now + ONE_MINUTE_MS);
  }

  const getLeaderboard = async () => {
    const leaderboardResults = await leaderboardRef.get();
    const promisedLeaderboard = await leaderboardResults.docs.map(doc => doc.data());
    if (promisedLeaderboard.length > 0) {
      const newLeaderboard = Object.values(promisedLeaderboard);
      setLeaderboard(newLeaderboard as ILeaderboard[]);
    }
  }

  const gameOver = () => {
    setGameStarted(false);
    setGameIsOver(true);
  }

  useEffect(() => {
    if (leaderboard.length === 0) {
      getLeaderboard()
    }
  }, [leaderboard])

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
      {
        gameIsOver
          ? <GameOver score={score} setGameIsOver={setGameIsOver} setScore={setScore} />
          : <>
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
      }


      {leaderboard.length > 0 && <Leaderboard leaderboard={leaderboard} />}
    </>
  )
}

export default Game
