import React, { useRef, useState } from 'react';
import updateWords from './updateWords';
import { NUMBER_OF_WORDS } from './updateWords';

const UserInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [words, setWords] = useState(updateWords());
  const [inputText, setInputText] = useState('')

  const handleChange = () => {
    const userWord = inputRef.current?.value;
    setInputText(userWord || '');
    if (userWord === words[0]) {
      console.log({ words });
      setWords(updateWords(words));
      setInputText('');
    }
  }

  return (
    <>
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
