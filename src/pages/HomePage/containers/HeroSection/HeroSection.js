import { SocialBlock } from '../../../../components/SocialBlock';
import { InfoBlock } from '../../../../components/InfoBlock';
import { Typography } from '../../../../components/Typography';
import './HeroSection.scss';

export const HeroSection = () => {
  return (
    <section className='heroSection' id='heroSection'>
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
