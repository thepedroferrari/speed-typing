import React, { useContext } from 'react';

import { useCountdown } from '../hooks/useCountdown';
import { AppContext } from './App';

const Countdown = () => {
  const { clock, gameOver } = useContext(AppContext);

  const { timeLeft, gameStarted } = useCountdown(clock!);
  const { minutes, seconds } = timeLeft;

  React.useEffect(() => {
    if (gameStarted && gameOver) {
      gameOver();
    }
  }, [clock, gameStarted, gameOver]);

  return (
    <time className="countdown">
      { minutes > 0 &&
        <span className="container">
          <span className="time">{minutes}</span>
          <span className="time-frame">&nbsp;m&nbsp;</span>
        </span>
      }
      <span className="container">
        <span className="time">{seconds}</span>
        <span className="time-frame">&nbsp;s&nbsp;</span>
      </span>
    </time>
  );
};

export default Countdown;
