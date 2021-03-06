import React, { useContext, useRef, useState } from 'react';
import updateWords from '../utils/updateWords';
import { NUMBER_OF_WORDS } from '../utils/updateWords';
import { useEffect } from 'react';
import { caseInsensitive } from '../utils/utils';
import { AppContext } from './App';

const UserInput = () => {
  const { clock, language, setClock, score, setScore, gameStarted, startGame } = useContext(AppContext);

  const inputRef = useRef<HTMLInputElement>(null);
  const [words, setWords] = useState(updateWords(undefined, language));
  const [inputText, setInputText] = useState('');
  updateWords(undefined, language)

  useEffect(() => {
    setWords(updateWords(undefined, language))
    inputRef.current?.focus();
  }, [language]);

  const handleChange = () => {
    if (!gameStarted) {
      startGame!();
    }

    const userWord = inputRef.current?.value;

    if (!userWord) {
      setInputText('');
      return;
    }

    setInputText(userWord);
    if (caseInsensitive(userWord) === caseInsensitive(words[0])) {
      const bonusTime = userWord.length * 100;
      const updatedTime = clock! + bonusTime;
      setScore!(score! + userWord.length);

      // Change word and update counter
      setWords(updateWords(words));
      setClock!(updatedTime)

      // Cleanup
      setInputText('');
    }
  }

  return (
    <><ul className="next-words">
      <li><strong>Next words</strong>: </li>
      {[...words.slice(1, NUMBER_OF_WORDS)].map((word, i) => (
        <li key={i}>
          {word}
        </li>
      ))}
    </ul>
      <label htmlFor="userInput">{words[0]}</label>
      <input
        name="userInput"
        id="userInput"
        ref={inputRef}
        type="text"
        onChange={handleChange}
        value={inputText}
        placeholder="Start typing to start the game"
      />
    </>
  );
}

export default UserInput;
