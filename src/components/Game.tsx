import React, { useState } from 'react'

import { ONE_MINUTE_MS } from '../utils/constants';
import Countdown from './Countdown';
import UserInput from './UserInput';
import Leaderboard from './Leaderboard';
import GameOver from './GameOver';
import { TLanguage } from '../utils/updateWords';
import LanguageSwitcher from './LanguageSwitcher';

const Game = () => {
  const [score, setScore] = useState(0);
  const [clock, setClock] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameIsOver, setGameIsOver] = useState(false);
  const [scores, setscores] = useState(0);
  const [language, setLanguage] = useState<TLanguage>('en');

  const startGame = () => {
    if (gameStarted) return;
    setGameStarted(true);
    const now = Date.now();
    setClock(now + ONE_MINUTE_MS);
  }

  const gameOver = () => {
    setGameStarted(false);
    setGameIsOver(true);
  }

  return (
    <>
      <header>
        <span>
          <strong>Score</strong>: {score}
        </span>
        {gameStarted ? <Countdown
          date={clock}
          onEnd={gameOver}
        /> : <LanguageSwitcher language={language} setLanguage={setLanguage} />
      }
      </header>
      {
        gameIsOver
          ? <GameOver score={score} setGameIsOver={setGameIsOver} setScore={setScore} setscores={setscores}/>
          : <>
            <UserInput
              clock={clock}
              setClock={setClock}
              score={score}
              setScore={setScore}
              gameStarted={gameStarted}
              startGame={startGame}
              language={language}
            />
            <button disabled={gameStarted} onClick={startGame}>{gameStarted ? 'GAME STARTED' : 'START GAME'}</button>
          </>
      }

      <Leaderboard scores={scores} />
    </>
  )
}

export default Game
