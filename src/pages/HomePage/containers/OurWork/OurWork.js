import { InfoBlock } from '../../../../components/InfoBlock';
import { Typography } from '../../../../components/Typography';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchImages } from '../../../../store/slices/tabsSlice';
import { ScaleLoader } from 'react-spinners';
import './OurWork.scss';

export const OurWork = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.tabs);
  const imagesStatus = useSelector((state) => state.tabs.status);

  useEffect(() => {
    if (imagesStatus === 'idle') {
      dispatch(fetchImages());
    }
  }, [imagesStatus, dispatch]);

  return (
    <section className='ourWork' id='ourWork'>
      <div className='sectionWrapper'>
        <InfoBlock
          title='Our Work'
          heading={'We Have Some Designed & Development Projects'}
          highlight={'Designed & Development'}
          button='none'
        ></InfoBlock>
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
            {imagesStatus !== 'succeeded' ? (
              <ScaleLoader
                className='spinner'
                color='#FF5300'
                width='10px'
                height='50px'
              />
            ) : (
              <div className='worksContainer'>
                {images.tabs.firstTab.map(({ id, url }) => (
                  <div key={id} className='imageContainer'>
                    <img src={url} className='imageContainer-img' alt='Oh...'/>
                    <div className='imageContainer-hover'>
                      <span className='icon-search'/>
                      <Typography className='title' component='h4' variant='h4' color='white' >Latest work</Typography>
                      <Typography className='subtitle' component='h6' variant='h6' color='white' >All</Typography>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabPanel>
          <TabPanel className='tabPanel'>
            {imagesStatus !== 'succeeded' ? (
              <ScaleLoader
                className='spinner'
                color='#FF5300'
                width='10px'
                height='50px'
              />
            ) : (
              <div className='worksContainer'>
                {images.tabs.secondTab.map(({ id, url }) => (
                  <div key={id} className='imageContainer'>
                    <img src={url} className='imageContainer-img' alt='Oh...'/>
                    <div className='imageContainer-hover'>
                      <span className='icon-search'/>
                      <Typography className='title' component='h4' color='white' >Latest work</Typography>
                      <Typography className='subtitle' component='h6' color='white' >Graphic Design</Typography>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabPanel>
          <TabPanel className='tabPanel'>
            <div className='worksContainer'>
              {imagesStatus !== 'succeeded' ? (
                <ScaleLoader
                  className='spinner'
                  color='#FF5300'
                  width='10px'
                  height='50px'
                />
              ) : (
                <div className='worksContainer'>
                  {images.tabs.thirdTab.map(({ id, url }) => (
                    <div key={id} className='imageContainer'>
                    <img src={url} className='imageContainer-img' alt='Oh...'/>
                    <div className='imageContainer-hover'>
                      <span className='icon-search'/>
                      <Typography className='title' component='h4' color='white' >Latest work</Typography>
                      <Typography className='subtitle' component='h6' color='white' >UI/UX Design</Typography>
                    </div>
                  </div>
                  ))}
                </div>
              )}
            </div>
          </TabPanel>
          <TabPanel className='tabPanel'>
            <div className='worksContainer'>
              {imagesStatus !== 'succeeded' ? (
                <ScaleLoader
                  className='spinner'
                  color='#FF5300'
                  width='10px'
                  height='50px'
                />
              ) : (
                <div className='worksContainer'>
                  {images.tabs.fourthTab.map(({ id, url }) => (
                    <div key={id} className='imageContainer'>
                    <img src={url} className='imageContainer-img' alt='Oh...'/>
                    <div className='imageContainer-hover'>
                      <span className='icon-search'/>
                      <Typography className='title' component='h4' color='white' >Latest work</Typography>
                      <Typography className='subtitle' color='white' >Web Development</Typography>
                    </div>
                  </div>
                  ))}
                </div>
              )}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};
