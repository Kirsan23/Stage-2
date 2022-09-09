import { InfoBlock } from '../../../../components/InfoBlock';
import { Typography } from '../../../../components/Typography';
import { useContext } from 'react';
import { DarkModeContext } from '../../../../components/Context';
import './OurExpereince.scss';

export const OurExpereince = () => {
  const { darkMode } = useContext(DarkModeContext);
  const cards = [
    {
      id: 1,
      counter: '250+',
      text: 'Global Customer',
    },
    {
      id: 2,
      counter: '156+',
      text: 'Project Completed',
    },
    {
      id: 3,
      counter: '50+',
      text: 'Team Member',
    },
    {
      id: 4,
      counter: '15+',
      text: 'Our Company',
    },
  ];
  return (
    <section
      className={`our-expereince ${darkMode ? `dark-theme` : `light-theme`}`}
    >
      <div className='our-expereince-block'>
        <div className='our-expereince-main-block'>
          <InfoBlock
            title='Our Expereince'
            heading='We Have Completed 150+ Projects Successfully'
            highlight='150+ Projects'
          >
            <Typography>
              Our Expereince We Have Completed 150+ Projects Succesfully Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
              imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum
              aenean. Nisi, lectus aliquet aliquam consectetur augue praesent.
              Lorem vulputate orci eget mi, sed pulvinar.
            </Typography>
            <Typography>
              Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit
              faucibus est, dui interdum ut amet. Adipiscing feugiat vel at
              posuere in. Pellentesque volutpat vestibulum.
            </Typography>
          </InfoBlock>
        </div>
        <div className='our-expereince-right-block'>
          {cards.map(({ id, counter, text }) => (
            <div key={id} className='our-expereince-right-block-card'>
              <Typography
                className='our-expereince-right-block-card-counter'
                variant='h1'
              >
                {counter}
              </Typography>
              <Typography
                className='our-expereince-right-block-card-text'
                variant='h5'
                color='gray'
              >
                {text}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
