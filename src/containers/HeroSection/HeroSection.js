import { Button } from '../../components/Button';
import { Typography } from '../../components/Typography';
import './HeroSection.scss';

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section-main-block">
        <div>
          <Typography variant="h1">We Are The Best </Typography>
          <Typography variant="h1" color="orange">
            Digital Agency{' '}
          </Typography>
          <Typography variant="h1">For Business</Typography>
          <Typography variant="body1" component="p">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Typography>
        </div>
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
