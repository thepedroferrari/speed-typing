import * as React from 'react';

import { useCountdown } from '../hooks/useCountdown';

interface Props {
  date: number;
  onEnd?: () => void;
}

const Countdown = ({ date, onEnd }: Props) => {
  const { timeLeft, gameStarted } = useCountdown(date);
  const { minutes, seconds } = timeLeft;

  React.useEffect(() => {
    if (gameStarted && onEnd) {
      onEnd();
    }
  }, [date, gameStarted, onEnd]);

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
