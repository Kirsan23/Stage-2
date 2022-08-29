import { SocialBlock } from '../../components/SocialBlock/SocialBlock';
import { InfoBlock } from '../../components/InfoBlock';
import { useContext } from 'react';
import { DarkModeContext } from '../../components/Context';
import './HeroSection.scss';

export function HeroSection() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section
      className={`hero-section ${darkMode ? `dark-theme` : `light-theme`}`}
    >
      <div className='hero-section-main-block'>
        <InfoBlock
          heading='We Are The Best Digital Agency For Business'
          highlight='Digital Agency'
          component='h1'
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </InfoBlock>
      </div>
      <img className='hero-section-img' src={require(`../../img/hero-section-img.png`)} alt='Oh...'/>
      <SocialBlock />
    </section>
  );
}
