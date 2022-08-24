import { InfoBlock } from '../../components/InfoBlock';
import './OurExpereince.scss';
import { Typography } from '../../components/Typography';
import { useContext } from 'react';
import { DarkModeContext } from '../../components/Context';

export function OurExpereince() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section className={`our-expereince ${darkMode ? `dark-theme` : `light-theme`}`}>
      <div className='our-expereince-block'>
        <div className='our-expereince-main-block'>
          <InfoBlock
            title='Our Expereince'
            heading='We Have Completed 150+ Projects Successfully'
            highlight='150+ Projects'
          >
            <Typography component='p'>
              Our Expereince We Have Completed 150+ Projects Succesfully Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
              imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum
              aenean. Nisi, lectus aliquet aliquam consectetur augue praesent.
              Lorem vulputate orci eget mi, sed pulvinar.
            </Typography>
            <Typography component='p'>
              Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit
              faucibus est, dui interdum ut amet. Adipiscing feugiat vel at
              posuere in. Pellentesque volutpat vestibulum.
            </Typography>
          </InfoBlock>
        </div>
        <div className='our-expereince-right-block'>
          <div className='our-expereince-right-block-card'>
            <h2 className='our-expereince-right-block-card-counter'>250+</h2>
            <h5 className='our-expereince-right-block-card-text'>
              Global Customer
            </h5>
          </div>
          <div className='our-expereince-right-block-card'>
            <h2 className='our-expereince-right-block-card-counter'>156+</h2>
            <h5 className='our-expereince-right-block-card-text'>
              Project Completed
            </h5>
          </div>
          <div className='our-expereince-right-block-card'>
            <h2 className='our-expereince-right-block-card-counter'>50+</h2>
            <h5 className='our-expereince-right-block-card-text'>
              Team Member
            </h5>
          </div>
          <div className='our-expereince-right-block-card'>
            <h2 className='our-expereince-right-block-card-counter'>15+</h2>
            <h5 className='our-expereince-right-block-card-text'>
              Our Company
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}
