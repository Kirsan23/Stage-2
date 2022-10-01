import React, { useContext } from 'react';
import { ThemeContext } from '../Context';

export const ThemeSwitch = () => {
  const { toggleTheme } = useContext(ThemeContext);

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <span className='icon-Dark' style={{cursor: 'pointer'}} onClick={handleClick}/>
  );
}
