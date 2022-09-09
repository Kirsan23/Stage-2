import { Logo } from '../../../../components/Logo';
import { useContext } from 'react';
import { DarkModeContext } from '../../../../components/Context';
import { ThemeSwitch } from '../../../../components/ThemeSwitch';
import { Navigation } from '../../../../components/Navigation';
import './Header.scss';

export function Header() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <header className={`header ${darkMode ? `dark-theme` : `light-theme`}`}>
      <Logo />
      <Navigation variant='h5'/>
      <ThemeSwitch />
    </header>
  );
}
