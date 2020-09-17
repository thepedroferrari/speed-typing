export const ALLOWED_CHARACTERS = '[^A-Za-z0-9]+/gi';

export const caseInsensitive = (text: string) => text.toLowerCase();

export const isCorrectKey = (char: string, key: string) => key === char;

export const textBreaker = (text: string): string[] => {
  return text.replace(ALLOWED_CHARACTERS, '').split(' ');
}

export const wordBreaker = (word: string): string[] => word.split('');

export const getRandomInt = (max: number) => Math.floor(Math.random() * max);

export const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  }
  if (
    /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return 'mobile';
  }
  return 'desktop';
};

export function sortNumbersBy<T, K extends keyof T>(
  key: K,
  arr: T[],
  order: 'asc' | 'dsc' = 'asc'
): T[] | undefined {
  // If we try to use this function and pass a key that leads to values other than
  // numeric ones we will end up returning the original array. To avoid confusion
  // that may lead to unwanted bugs we are returning undefined.
  if (typeof arr[0][key] !== 'number') return;

  // make a shallow copy of the input array
  const copyOfArray = [...arr]
    // we're using sort which overwrites the array that, good thing we copied it.
    .sort((a: T, b: T) => Number(a[key]) - Number(b[key]));

  // now the copied array is modified by the sort function, so we just need to
  // return it.
  return order === 'dsc' ? copyOfArray.reverse() : copyOfArray;
}
