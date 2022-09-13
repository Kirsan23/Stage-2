import { InfoBlock } from '../../../../components/InfoBlock';
import { Typography } from '../../../../components/Typography';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './OurWork.scss';

export const OurWork = () => {
  // TODO: request images for tabs from - https://github.com/unsplash/unsplash-js

  return (
    <section className='ourWork' id='ourWork'>
      <div className='sectionWrapper'>
        <InfoBlock
          title='Our Work'
          heading={'We Have Some Designed & Development Projects'}
          highlight={'Designed & Development'}
          button='none'
        ></InfoBlock>
          {/* TODO: make tabs work */}
          {/* All / Graphic Design / UI/UX Design / Web Development - each tab needs to show different images */}
          <Tabs className='tabWrapper'>
            <TabList className='list'>
              <Tab className='list-item'>
                <Typography component='h5' variant='h5' color='gray'>
                  All
                </Typography>
              </Tab>
              <Tab className='list-item'>
                <Typography component='h5' variant='h5' color='gray'>
                  Graphic Design
                </Typography>
              </Tab>
              <Tab className='list-item'>
                <Typography component='h5' variant='h5' color='gray'>
                  UI/UX Design
                </Typography>
              </Tab>
              <Tab className='list-item'>
                <Typography component='h5' variant='h5' color='gray'>
                  Web Development
                </Typography>
              </Tab>
            </TabList>

            <TabPanel className='tabPanel'>
                <div className='worksContainer'>
                  <img
                    className='worksContainer-img'
                    src={require(`../../../../img/OurWorkImg1.png`)}
                    alt='Oh...'
                  />
                  <img
                    className='worksContainer-img'
                    src={require(`../../../../img/OurWorkImg4.png`)}
                    alt='Oh...'
                  />
                </div>
                <div className='worksContainer'>
                  <img
                    className='worksContainer-img'
                    src={require(`../../../../img/OurWorkImg2.png`)}
                    alt='Oh...'
                  />
                  <img
                    className='worksContainer-img'
                    src={require(`../../../../img/OurWorkImg5.png`)}
                    alt='Oh...'
                  />
                </div>
                <div className='worksContainer'>
                  <img
                    className='worksContainer-img'
                    src={require(`../../../../img/OurWorkImg3.png`)}
                    alt='Oh...'
                  />
                  <img
                    className='worksContainer-img'
                    src={require(`../../../../img/OurWorkImg6.png`)}
                    alt='Oh...'
                  />
                </div>
            </TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
          </Tabs>
      </div>
    </section>
  );
};
