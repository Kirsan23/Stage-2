import { Button } from '../../components/Button';
import { Typography } from '../../components/Typography';
import './HeroSection.scss';
import { ImgPaste } from '../../components/ImgPaste/ImgPaste';
import { SocialBlock } from '../../components/SocialBlock/SocialBlock';
import { ForTest } from '../../components/ForTest/ForTest';

export function HeroSection() {
  return (
    <section className='hero-section'>
      <div className='hero-section-main-block'>
        <div>
          {/* <Typography variant='h1' component='h1'>
            We Are The Best{' '}
          </Typography>
          <Typography variant='h1' component='h1' color='orange'>
            Digital Agency{' '}
          </Typography>
          <Typography variant='h1' component='h1'>
            For Business
          </Typography>
          <Typography variant='body1' component='p' color='gray'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Typography> */}
          <ForTest
            heading='We Are The Best Digital Agency For Business'
            highlight='Digital Agency'
            paragraph='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
            component='h1'
          ></ForTest>
        </div>
        {/* <Button /> */}
      </div>
      <ImgPaste sectionName='hero-section' name='hero-section-img'></ImgPaste>
      <SocialBlock />
    </section>
  );
}
