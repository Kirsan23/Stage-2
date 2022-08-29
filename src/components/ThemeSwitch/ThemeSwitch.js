import React, { useContext } from 'react';
import { DarkModeContext } from '../Context';

export function ThemeSwitch() {
  // unused variable darkMode
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <h5 className='theme-switch' onClick={handleClick}>
      *
    </h5>
  );
}
