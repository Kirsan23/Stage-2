import { Heading } from '../../components/Heading';
import './HeroSection.scss';
import { Button } from '../../components/Button';
import { Typography } from '../../components/Typography';
import { TextBlock } from '../TextBlock/TextBlock';

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section-main-block">
        {/* <Heading>
          We Are The Best <span>Digital Agency</span> For Business
        </Heading>
        <Typography>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Typography> */}
        <TextBlock
          title='We Are The Best <span>Digital Agency</span> For Business'
          typography='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.'
        ></TextBlock>
        <Button>Contact Us</Button>
      </div>
      <img
        className="hero-section-img"
        src={require('../../img/main-img.png')}
        alt="Oh..."
      />
      <div className="social-block">
        <span className="icon-facebook-fill social-block-icon"></span>
        <span className="icon-instagram-fill social-block-icon"></span>
        <span className="icon-twitter-fill social-block-icon"></span>
        <span className="icon-skype-fill social-block-icon"></span>
      </div>
    </section>
  );
}
