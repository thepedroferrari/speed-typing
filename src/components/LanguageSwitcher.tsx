import React, { ChangeEvent, Dispatch, SetStateAction} from 'react'
import { TLanguage } from '../utils/updateWords';


interface ILanguageSwitcher {
  language: TLanguage;
  setLanguage: Dispatch<SetStateAction<TLanguage>>
}
const LanguageSwitcher = ({ language, setLanguage }: ILanguageSwitcher) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as TLanguage);
  }

  return (
    <select value={language} onChange={handleChange}>
      <option value="en">English</option>
      <option value="sv">Swedish</option>
      <option value="pt" disabled>Portuguese</option>
    </select>
  )
}

export default LanguageSwitcher
