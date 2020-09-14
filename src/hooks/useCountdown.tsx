import { useEffect, useState } from 'react';
import {
  ONE_DAY_MS,
  ONE_HOUR_MS,
  ONE_MINUTE_MS,
  ONE_SECOND_MS,
} from '../utils/constants'

interface Timeleft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const getTimeLeft = (date: number): Timeleft => {
  const difference = +new Date(date) - +new Date();
  let timeLeft: Timeleft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / ONE_DAY_MS),
      hours: Math.floor((difference / ONE_HOUR_MS) % 24),
      minutes: Math.floor((difference / ONE_MINUTE_MS) % 60),
      seconds: Math.floor((difference / ONE_SECOND_MS) % 60),
    };
  }

  return timeLeft;
};

export function useCountdown(date: number) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(date));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(getTimeLeft(date));
    }, 1000);

    return function cleanup() {
      clearTimeout(timer);
    };
  });

  const gameStarted =
    timeLeft.days <= 0 &&
    timeLeft.hours <= 0 &&
    timeLeft.minutes <= 0 &&
    timeLeft.seconds <= 0;

  return { timeLeft, gameStarted };
}
