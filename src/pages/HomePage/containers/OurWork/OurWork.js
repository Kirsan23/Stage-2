import { InfoBlock } from '../../../../components/InfoBlock';
import { Typography } from '../../../../components/Typography';
import { useContext } from 'react';
import { DarkModeContext } from '../../../../components/Context';
import './OurWork.scss';

export const OurWork = () => {
  const { darkMode } = useContext(DarkModeContext);

  // TODO: request images for tabs from - https://github.com/unsplash/unsplash-js

  return (
    <section
      className={`our-work ${darkMode ? `dark-theme` : `light-theme`}`}
      id='ourWork'
    >
      <div className='our-work-block'>
        <InfoBlock
          title='Our Work'
          heading={'We Have Some Designed & Development Projects'}
          highlight={'Designed & Development'}
          button='none'
        ></InfoBlock>
        <div className='our-work-navigation'>
          {/* TODO: make tabs work */}
          {/* All / Graphic Design / UI/UX Design / Web Development - each tab needs to show different images */}
          <Typography
            className='our-work-navigation-unit'
            component='h5'
            variant='h5'
            color='gray'
          >
            All
          </Typography>
          <Typography
            className='our-work-navigation-unit'
            component='h5'
            variant='h5'
            color='gray'
          >
            Graphic Design
          </Typography>
          <Typography
            className='our-work-navigation-unit'
            component='h5'
            variant='h5'
            color='gray'
          >
            UI/UX Design
          </Typography>
          <Typography
            className='our-work-navigation-unit'
            component='h5'
            variant='h5'
            color='gray'
          >
            Web Development
          </Typography>
        </div>
        <div className='our-work-main-block'>
          <div className='our-work-main-block-imgs'>
            <img
              className='our-work-main-block-img'
              src={require(`../../../../img/OurWorkImg1.png`)}
              alt='Oh...'
            />
            <img
              className='our-work-main-block-img'
              src={require(`../../../../img/OurWorkImg4.png`)}
              alt='Oh...'
            />
          </div>
          <div className='our-work-main-block-imgs'>
            <img
              className='our-work-main-block-img'
              src={require(`../../../../img/OurWorkImg2.png`)}
              alt='Oh...'
            />
            <img
              className='our-work-main-block-img'
              src={require(`../../../../img/OurWorkImg5.png`)}
              alt='Oh...'
            />
          </div>
          <div className='our-work-main-block-imgs'>
            <img
              className='our-work-main-block-img'
              src={require(`../../../../img/OurWorkImg3.png`)}
              alt='Oh...'
            />
            <img
              className='our-work-main-block-img'
              src={require(`../../../../img/OurWorkImg6.png`)}
              alt='Oh...'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
