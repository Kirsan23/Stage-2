import { SocialBlock } from '../../../../components/SocialBlock/SocialBlock';
import { InfoBlock } from '../../../../components/InfoBlock';
import { useContext } from 'react';
import { DarkModeContext } from '../../../../components/Context';
import { Typography } from '../../../../components/Typography';
import './HeroSection.scss';

export const HeroSection = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section
      className={`heroSection ${darkMode ? `dark-theme` : `light-theme`}`}
      id='heroSection'
    >
      <InfoBlock
        heading='We Are The Best Digital Agency For Business'
        highlight='Digital Agency'
        component='h1'
        className='heroSection-info'
      >
        <Typography color='gray' component='p'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Typography>
      </InfoBlock>
      <img src={require(`../../../../img/hero-section-img.png`)} alt='Oh...' />
      <SocialBlock />
    </section>
  );
};
