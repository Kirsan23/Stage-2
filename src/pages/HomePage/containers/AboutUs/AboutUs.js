import { useRef } from 'react';
import { Typography } from '../../../../components/Typography';
import { InfoBlock } from '../../../../components/InfoBlock/InfoBlock';
import './AboutUs.scss';

export const AboutUs = () => {
  const cardsRef = useRef([
    {
      id: 1,
      text: 'World leader in consulting and finance',
      icon: 'icon-file-line',
      color: 'orange',
    },
    {
      id: 2,
      text: 'A focused team with a specialized skill',
      icon: 'icon-code-line',
      color: 'gray',
    },
    {
      id: 3,
      text: 'Trusted and professional advisors for you',
      icon: 'icon-settings-4-line',
      color: 'blue',
    },
    {
      id: 4,
      text: 'Experience to give you a better results',
      icon: 'icon-share-box-line',
      color: 'black',
    },
  ]);
  return (
    <section className='aboutUs' id='aboutUs'>
      <div className='sectionWrapper'>
        <div className='topContainer'>
          <img
            className='aboutUs-img'
            src={require(`../../../../img/about-us-img.png`)}
            alt='Oh...'
          />
          <div className='aboutUs-info'> {/* Block displacement wrapper (aesthetics) */}
            <InfoBlock
              title='About Us'
              heading='We Are Making Ideas Better For Everyone'
              highlight='Making Ideas Better'
            >
              <Typography className='infoBlock-paragraph secondary' component='p'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nascetur imperdiet at a augue ullamcorper. Leo faucibus feugiat
                rutrum aenean. Nisi, lectus aliquet aliquam consectetur augue
                praesent. Lorem vulputate orci eget mi, sed pulvinar.
              </Typography>
              <Typography className='infoBlock-paragraph' component='p'>
                Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit
                faucibus est, dui interdum ut amet. Adipiscing feugiat vel at
                posuere in. Pellentesque volutpat vestibulum.
              </Typography>
            </InfoBlock>
          </div>
        </div>
        <div className='bottomContainer'>
          {cardsRef.current.map(({ id, text, icon, color }) => (
            <div key={id} className='bottomContainer-card'>
              <div className={`bottomContainer-card-icon ${color}`}>
                <span className={`${icon}`} />
              </div>
              <div className='bottomContainer-card-text'>
                <Typography component='h6'>{text}</Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
