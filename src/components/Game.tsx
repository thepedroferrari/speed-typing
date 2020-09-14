import React, { useState } from 'react'
import Countdown from './Countdown';
import UserInput from './UserInput';
import { ONE_MINUTE_MS } from '../utils/constants';


const Game = () => {
  const now = Date.now();
  const onEnd = () => {
    alert('GAME OVER');
  }

  const [clock, setClock] = useState(now + ONE_MINUTE_MS);

  return (
    <div>
      <Countdown date={clock} onEnd={onEnd}/>
      <UserInput clock={clock} setClock={setClock} />
    </div>
  )
}

export default Game
