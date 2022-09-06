import { useContext } from 'react';
import { DarkModeContext } from '../../components/Context';
import { Typography } from '../../components/Typography';
import './Footer.scss';

export const Footer = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section className={`footer ${darkMode ? `dark-theme` : `light-theme`}`}>
      <div className='top'>
        <div className='top-wrapper'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className='bottom'>
        <div className='bottom-wrapper'>
          <div className='bottom-text'>
          <span>&copy;</span>
            <Typography component='h6' color='white'>
              Copyright 2021. All Right Reserved By Ojjomedia
            </Typography>
          </div>
          <div className='bottom-text'><span className='icon-arrow-up-fill'></span></div>
        </div>
      </div>
    </section>
  );
};
