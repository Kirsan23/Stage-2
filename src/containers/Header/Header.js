import { Highlighter } from '../../components/Highlighter';
import { ThemeSwitch } from '../../components/ThemeSwitch';
import { Navigation } from '../../components/Navigation';
import { useState } from 'react';
import './Header.scss';

export function Header() {

  // TODO edit header for mobile screens!

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <header className='header'>
      <Highlighter
              heading='Digiency'
              highlight='Digie'
            />
      <Navigation className={`navigation ${click && 'active'}`} variant='h5'/>
      <ThemeSwitch />
      <button onClick={handleClick} className='headerMenu'><span className='icon-menu-line' style={{cursor: 'pointer'}} /></button>
    </header>
  );
}
