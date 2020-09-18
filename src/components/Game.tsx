import React, { useContext } from 'react'

import { AppContext } from './App';
import Countdown from './Countdown';
import GameOver from './GameOver';
import LanguageSwitcher from './LanguageSwitcher';
import Leaderboard from './Leaderboard';
import UserInput from './UserInput';

const Game = () => {
  const { gameStarted, score, gameIsOver, startGame, scores } = useContext(AppContext);

  return (
    <>
      <header>
        <span>
          <strong>Score</strong>: {score}
        </span>
        {gameStarted ? <Countdown /> : <LanguageSwitcher />
      }
      </header>
      {
        gameIsOver
          ? <GameOver />
          : <>
            <UserInput />
            <button disabled={gameStarted} onClick={startGame}>{gameStarted ? 'GAME STARTED' : 'START GAME'}</button>
          </>
      }

      <Leaderboard scores={scores!} />
    </>
  )
}

export default Game
