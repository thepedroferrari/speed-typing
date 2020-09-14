import { textBreaker, getRandomInt, TEST_TEXT } from './utils';

export const NUMBER_OF_WORDS = 5;

const words = textBreaker(TEST_TEXT);
const length = words.length;
const getWord = () => words[getRandomInt(length)];

type INextWords = string[];

const updateWords = (prevWords: INextWords = []): INextWords => {
  if (prevWords.length) {
    const nextWords = prevWords.slice(1, NUMBER_OF_WORDS);
    const newWord = getWord();
    nextWords.push(newWord);
    return nextWords;
  }
  return [...Array(NUMBER_OF_WORDS)].map(() => getWord());
}

export default updateWords;
