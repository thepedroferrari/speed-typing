import React, { useState } from 'react'
import Countdown from './Countdown';
import UserInput from './UserInput';
import { ONE_MINUTE_MS } from '../utils/constants';


const Game = () => {
  const [score, setScore] = useState(0);
  const now = Date.now();
  const onEnd = () => {
    alert('GAME OVER');
  }

  const [clock, setClock] = useState(now + 5 * ONE_MINUTE_MS);

  return (
    <>
      <header>
        <span><strong>Score</strong>: {score}</span>
        <Countdown date={clock} onEnd={onEnd}/>
      </header>
      <UserInput clock={clock} setClock={setClock} score={score} setScore={setScore} />
    </>
  )
}

export default Game
