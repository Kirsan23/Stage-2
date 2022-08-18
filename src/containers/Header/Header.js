import { Logo } from '../../components/Logo';
import './Header.scss';

export function Header() {
  return (
    <header className='header'>
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
      <div className='header-switcher'>*</div>
    </header>
  );
}
