import React, { useRef, useState } from 'react';
import updateWords from '../utils/updateWords';
import { NUMBER_OF_WORDS } from '../utils/updateWords';

interface Props {
  clock: number;
  setClock: React.Dispatch<React.SetStateAction<number>>
}

const UserInput = ({clock, setClock}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [words, setWords] = useState(updateWords());
  const [inputText, setInputText] = useState('');
  const [score, setScore] = useState(0);

  const handleChange = () => {
    const userWord = inputRef.current?.value;
    setInputText(userWord || '');
    if (userWord === words[0]) {
      const bonusTime = userWord.length * 100;
      const updatedTime = clock + bonusTime;
      setScore(score + userWord.length);

      // Change word and update counter
      setWords(updateWords(words));
      setClock(updatedTime)

      // Cleanup
      setInputText('');
    }
  }

  return (
    <>
      <h2>Score: {score}</h2>
      <ul>
        {[...words].reverse().map((word, i) => (
          <li key={i}>
            {i === NUMBER_OF_WORDS - 1 ? <strong>{word}</strong> : word}
          </li>
        ))}
      </ul>
      <input ref={inputRef} type="text" onChange={handleChange} value={inputText}/>
    </>
  );
}

export default UserInput;
