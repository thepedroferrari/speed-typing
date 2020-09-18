import React, { ChangeEvent, useContext} from 'react'

import { TLanguage } from '../utils/updateWords';
import { AppContext } from './App';


const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(AppContext);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setLanguage!(e.target.value as TLanguage);
  }

  return (
    <aside>
      <label htmlFor="language" className="language">Language</label>
      <select id="language" name="language" value={language} onChange={handleChange}>
        <option value="en">English</option>
        <option value="sv">Swedish</option>
        <option value="pt" disabled>Portuguese</option>
      </select>
    </aside>
  )
}

export default LanguageSwitcher
