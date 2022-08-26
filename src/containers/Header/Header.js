import { Logo } from '../../components/Logo';
import './Header.scss'; // css files better to be last import
import { useContext } from 'react'; // absolute imports better to be before relative imports
import { DarkModeContext } from '../../components/Context';
import { ThemeSwitch } from '../../components/ThemeSwitch';

export function Header() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <header className={`header ${darkMode ? `dark-theme` : `light-theme`}`}>
      {/* Why do you need additional div wrapper around Logo? */}
      <div className='header-logo'>
        <Logo />
      </div>
      {/* TODO: move navigation to separated component */}
      {/* Please use array of objects and .map() function to print out similar items */}
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
