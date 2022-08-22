import { Button } from '../../components/Button';
import { Typography } from '../../components/Typography';
import { ImgPaste } from '../../components/ImgPaste/ImgPaste';
import { InfoBlock } from '../../components/InfoBlock';
import { ForTest } from '../../components/ForTest';
import './AboutUs.scss';

export function AboutUs() {
  return (
    <section className='about-us'>
      <div className='about-us-block'>
        <div className='about-us-top-block'>
          <ImgPaste sectionName='about-us' name='about-us-img'></ImgPaste>
          <div className='about-us-main-block'>
            {/* <Typography>About Us</Typography>
            <Typography variant="h2" component="h2">
              We Are{' '}
            </Typography>
            <Typography variant="h2" component="h2" color="orange">
              Making Ideas Better{' '}
            </Typography>
            <Typography variant="h2" component="h2">
              For Everyone
            </Typography>
            <Typography variant="body1" component="p" color="gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
              imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum
              aenean. Nisi, lectus aliquet aliquam consectetur augue praesent.
              Lorem vulputate orci eget mi, sed pulvinar. Ornare etiam erat
              volutpat tempor fringilla mi. Elit a blandit faucibus est, dui
              interdum ut amet. Adipiscing feugiat vel at posuere in.
              Pellentesque volutpat vestibulum.
            </Typography>
            <Button>Contact Us</Button> */}
            <InfoBlock
              title='About Us'
              heading='We Are Making Ideas Better For Everyone'
              highlight='Making Ideas Better'
              paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum aenean. Nisi, lectus aliquet aliquam consectetur augue praesent. Lorem vulputate orci eget mi, sed pulvinar.

Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit faucibus est, dui interdum ut amet. Adipiscing feugiat vel at posuere in. Pellentesque volutpat vestibulum.`}
            />
          </div>
        </div>
        <div className='about-us-bottom-block'>
          <div className='about-us-bottom-block-card'>
            <div className='about-us-bottom-block-card-button'>
              <Button variant='circular'>
                <span className='icon-file-line'></span>
              </Button>
            </div>
            <div className='about-us-bottom-block-card-text'>
              <Typography>
                World leader in consulting
                <br />
                and finance
              </Typography>
            </div>
          </div>
          <div className='about-us-bottom-block-card'>
            <div className='about-us-bottom-block-card-button'>
              <Button variant='circular' color='gray'>
                <span className='icon-code-line'></span>
              </Button>
            </div>
            <div className='about-us-bottom-block-card-text'>
              <Typography>
                A focused team with a<br />
                specialized skill
              </Typography>
            </div>
          </div>
          <div className='about-us-bottom-block-card'>
            <div className='about-us-bottom-block-card-button'>
              <Button variant='circular' color='blue'>
                <span className='icon-settings-4-line'></span>
              </Button>
            </div>
            <div className='about-us-bottom-block-card-text'>
              <Typography>
                Trusted and professional
                <br />
                advisors for you
              </Typography>
            </div>
          </div>
          <div className='about-us-bottom-block-card'>
            <div className='about-us-bottom-block-card-button'>
              <Button variant='circular' color='black'>
                <span className='icon-share-box-line'></span>
              </Button>
            </div>
            <div className='about-us-bottom-block-card-text'>
              <Typography>
                Experience to give you a<br />
                better results
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
