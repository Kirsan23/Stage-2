import { Button } from '../../components/Button';
import { Typography } from '../../components/Typography';
import { ImgPaste } from '../../components/ImgPaste';
import { InfoBlock } from '../../components/InfoBlock';
import { useContext } from 'react';
import { DarkModeContext } from '../../components/Context';
import './AboutUs.scss';

export function AboutUs() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section className={`about-us ${darkMode ? `dark-theme` : `light-theme`}`}>
      <div className='about-us-block'>
        <div className='about-us-top-block'>
          <ImgPaste sectionName='about-us' name='about-us-img'></ImgPaste>
          <div className='about-us-main-block'>
            <InfoBlock
              title='About Us'
              heading='We Are Making Ideas Better For Everyone'
              highlight='Making Ideas Better'
            >
              <Typography color='gray'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nascetur imperdiet at a augue ullamcorper. Leo faucibus feugiat
                rutrum aenean. Nisi, lectus aliquet aliquam consectetur augue
                praesent. Lorem vulputate orci eget mi, sed pulvinar.
                <br /> {/* No <br> please! */}
                <br /> {/* No <br> please! */}
              </Typography>
              <Typography color='gray'>
                Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit
                faucibus est, dui interdum ut amet. Adipiscing feugiat vel at
                posuere in. Pellentesque volutpat vestibulum.
              </Typography>
            </InfoBlock>
          </div>
        </div>
        <div className='about-us-bottom-block'>
          {/* Please use array of objects and .map() function to print out similar items */}
          <div className='about-us-bottom-block-card'>
            <div className='about-us-bottom-block-card-button'>
              {/* Why do you think icon in these cards are buttons? I think it's regular icons */}
              <Button variant='circular'>
                {/* Can we pass 'icon' prop into button so button will render icon/span inside? */}
                <span className='icon-file-line'/>
              </Button>
            </div>
            <div className='about-us-bottom-block-card-text'>
              <Typography>
                World leader in consulting
                <br /> {/* No <br> please! */}
                and finance
              </Typography>
            </div>
          </div>
          <div className='about-us-bottom-block-card'>
            <div className='about-us-bottom-block-card-button'>
              <Button variant='circular' color='gray'>
                {/* Can we pass 'icon' prop into button so button will render icon/span inside? */}
                <span className='icon-code-line'/>
              </Button>
            </div>
            <div className='about-us-bottom-block-card-text'>
              <Typography>
                A focused team with a<br /> {/* No <br> please! */}
                specialized skill
              </Typography>
            </div>
          </div>
          <div className='about-us-bottom-block-card'>
            <div className='about-us-bottom-block-card-button'>
              <Button variant='circular' color='blue'>
                {/* Can we pass 'icon' prop into button so button will render icon/span inside? */}
                <span className='icon-settings-4-line'/>
              </Button>
            </div>
            <div className='about-us-bottom-block-card-text'>
              <Typography>
                Trusted and professional
                <br /> {/* No <br> please! */}
                advisors for you
              </Typography>
            </div>
          </div>
          <div className='about-us-bottom-block-card'>
            <div className='about-us-bottom-block-card-button'>
              <Button variant='circular' color='black'>
                {/* Can we pass 'icon' prop into button so button will render icon/span inside? */}
                <span className='icon-share-box-line'/>
              </Button>
            </div>
            <div className='about-us-bottom-block-card-text'>
              <Typography>
                Experience to give you a<br /> {/* No <br> please! */}
                better results
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
