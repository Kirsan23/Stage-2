import { Highlighter } from '../../../../components/Highlighter';
import { ThemeSwitch } from '../../../../components/ThemeSwitch';
import { Navigation } from '../../../../components/Navigation';
import './Header.scss';

export function Header() {
  return (
    <header className='header'>
      <Highlighter
              heading='Digiency'
              highlight='Digie'
            />
      <Navigation variant='h5'/>
      <ThemeSwitch />
    </header>
  );
}
