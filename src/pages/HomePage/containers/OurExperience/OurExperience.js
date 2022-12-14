import { InfoBlock } from '../../../../components/InfoBlock';
import { Typography } from '../../../../components/Typography';
import './OurExperience.scss';

export const OurExperience = () => {
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
    <section className={`ourExperience`}>
      <div className='sectionWrapper'>
        <div className='ourExperience-info'>
          <InfoBlock
            title='Our Experience'
            heading='We Have Completed 150+ Projects Successfully'
            highlight='150+ Projects'
          >
            <Typography className='infoBlock-paragraph secondary' component='p'>
              Our Experience We Have Completed 150+ Projects Succesfully Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
              imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum
              aenean. Nisi, lectus aliquet aliquam consectetur augue praesent.
              Lorem vulputate orci eget mi, sed pulvinar.
            </Typography>
            <Typography className='infoBlock-paragraph' component='p'>
              Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit
              faucibus est, dui interdum ut amet. Adipiscing feugiat vel at
              posuere in. Pellentesque volutpat vestibulum.
            </Typography>
          </InfoBlock>
        </div>
        <div className='rightContainer'>
          {cards.map(({ id, counter, text }) => (
            <div key={id} className='card'>
              <Typography className='card-counter'>{counter}</Typography>
              <Typography className='card-text' variant='h5' color='gray'>
                {text}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
