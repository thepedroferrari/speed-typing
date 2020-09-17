import { textBreaker, getRandomInt } from './utils';
import english from '../languages/english';
import swedish from '../languages/swedish';

export const NUMBER_OF_WORDS = 5;
export type TLanguage = 'en' | 'sv' | 'pt';

const words = (lang: TLanguage) => {
  if (lang === 'sv') return textBreaker(swedish)
  return textBreaker(english)
};

const getWord = (lang: TLanguage) => words(lang)[getRandomInt(words(lang).length)];

type INextWords = string[];

const updateWords = (prevWords: INextWords = [], lang: TLanguage = 'en'): INextWords => {
  if (prevWords.length) {
    const nextWords = prevWords.slice(1, NUMBER_OF_WORDS);
    const newWord = getWord(lang);
    nextWords.push(newWord);
    return nextWords;
  }
  return [...Array(NUMBER_OF_WORDS)].map(() => getWord(lang));
}

export default updateWords;
