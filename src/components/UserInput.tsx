import React, { useRef, useState } from 'react';
import updateWords from '../utils/updateWords';
import { NUMBER_OF_WORDS } from '../utils/updateWords';
import { useEffect } from 'react';
import { caseInsensitive } from '../utils/utils';

interface Props {
  clock: number;
  setClock: React.Dispatch<React.SetStateAction<number>>
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const UserInput = ({ clock, setClock, score, setScore}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [words, setWords] = useState(updateWords());
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = () => {
    const userWord = inputRef.current?.value;
    if (!userWord) return;

    setInputText(userWord);
    if (caseInsensitive(userWord) === words[0]) {
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
      <ul className="next-words">
        <li><strong>Next words</strong>: </li>
        {[...words.slice(1, NUMBER_OF_WORDS)].map((word, i) => (
          <li key={i}>
            {word}
          </li>
        ))}
      </ul>
      <label>{words[0]}</label>
      <input ref={inputRef} type="text" onChange={handleChange} value={inputText}/>
    </>
  );
}

export default UserInput;
