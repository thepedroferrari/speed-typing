import React, { createContext, Dispatch, ReactNode, SetStateAction, useState} from 'react'
import { TLanguage } from '../utils/updateWords';
import Game from './Game';
import { ONE_MINUTE_MS } from '../utils/constants';

interface IAppContext {
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
  clock: number;
  setClock: Dispatch<SetStateAction<number>>;
  gameStarted: boolean;
  setGameStarted: Dispatch<SetStateAction<boolean>>;
  gameIsOver: boolean;
  setGameIsOver: Dispatch<SetStateAction<boolean>>;
  scores: number;
  setscores: Dispatch<SetStateAction<number>>;
  language: TLanguage;
  setLanguage: Dispatch<SetStateAction<TLanguage>>;
  startGame: () => void;
  gameOver: () => void;
}

export const AppContext = createContext<Partial<IAppContext>>({});


const AppProvider = () => {
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
    <AppContext.Provider value={{
      score,
      setScore,
      clock,
      setClock,
      gameStarted,
      setGameStarted,
      gameIsOver,
      setGameIsOver,
      scores,
      setscores,
      language,
      setLanguage,
      startGame,
      gameOver
    }}>
      <Game />
    </AppContext.Provider>
  )
}

export default AppProvider
