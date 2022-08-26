import { InfoBlock } from '../../components/InfoBlock';
import './OurWork.scss';
import { Typography } from '../../components/Typography';
import { ImgPaste } from '../../components/ImgPaste';
import { useContext } from 'react';
import { DarkModeContext } from '../../components/Context';

export function OurWork() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section className={`our-work ${darkMode ? `dark-theme` : `light-theme`}`}>
      <div className='our-work-block'>
        <InfoBlock
          title='Our Work'
          heading={'We Have Some Designed & Development Projects'}
          highlight={'Designed & Development'}
          button='none'
        ></InfoBlock>
        <div className='our-work-navigation'>
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
            <ImgPaste sectionName='our-work-main-block' name='OurWorkImg1' />
            <ImgPaste sectionName='our-work-main-block' name='OurWorkImg4' />
          </div>
          <div className='our-work-main-block-imgs'>
            <ImgPaste sectionName='our-work-main-block' name='OurWorkImg2' />
            <ImgPaste sectionName='our-work-main-block' name='OurWorkImg5' />
          </div>
          <div className='our-work-main-block-imgs'>
            <ImgPaste sectionName='our-work-main-block' name='OurWorkImg3' />
            <ImgPaste sectionName='our-work-main-block' name='OurWorkImg6' />
          </div>
        </div>
      </div>
    </section>
  );
}
