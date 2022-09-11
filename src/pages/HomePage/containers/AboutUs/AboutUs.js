import { Typography } from '../../../../components/Typography';
import { InfoBlock } from '../../../../components/InfoBlock/InfoBlock'; 
import { useContext } from 'react';
import { DarkModeContext } from '../../../../components/Context';
import './AboutUs.scss';

export const AboutUs = () => {
  const { darkMode } = useContext(DarkModeContext);
  const cards = [
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
  ];
  return (
    <section className={`about-us ${darkMode ? `dark-theme` : `light-theme`}`} id='aboutUs'>
      <div className='about-us-block'>
        <div className='about-us-top-block'>
          <img
            className='about-us-img'
            src={require(`../../../../img/about-us-img.png`)}
            alt='Oh...'
          />
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
          {cards.map(({ id, text, icon, color }) => (
            <div key={id} className='about-us-bottom-block-card'>
              <div className={`about-us-bottom-block-card-button ${color}`}>
                <span className={`${icon}`} />
              </div>
              <div className='about-us-bottom-block-card-text'>
                <Typography>{text}</Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
