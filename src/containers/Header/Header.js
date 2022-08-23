import { Logo } from '../../components/Logo';
import './Header.scss';
import { useContext } from 'react';
import { DarkModeContext } from '../../components/Context';
import { ThemeSwitch } from '../../components/ThemeSwitch';

export function Header() {
  const {darkMode} = useContext(DarkModeContext)
  return (
    <header className={`header ${darkMode ? `dark-theme` : `light-theme`}`}>
      <div className="header-logo">
        <Logo />
      </div>
      {/* TODO: move navigation to separated component */}
      <div className='header-navigation'>
        <h5 className='header-navigation-items'>Home</h5>
        <h5 className='header-navigation-items'>About Us</h5>
        <h5 className='header-navigation-items'>Our Work</h5>
        <h5 className='header-navigation-items'>Clients</h5>
        <h5 className='header-navigation-items'>Our Blog</h5>
        <h5 className='header-navigation-items'>Contact Us</h5>
      </div>
      <ThemeSwitch />
    </header>
  );
}
