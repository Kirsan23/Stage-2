import React, { useContext } from 'react';
import { DarkModeContext } from '../Context';

export const ThemeSwitch = () => {
  const { toggleDarkMode } = useContext(DarkModeContext);

  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <span className='icon-Dark' onClick={handleClick}/>
  );
}
