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
                  <div
                    key={id}
                    className='worksContainer-img'
                    style={{
                      backgroundImage: `url(${url})`,
                    }}
                  />
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
                  <div
                    key={id}
                    className='worksContainer-img'
                    style={{
                      backgroundImage: `url(${url})`,
                    }}
                  />
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
                    <div
                      key={id}
                      className='worksContainer-img'
                      style={{
                        backgroundImage: `url(${url})`,
                      }}
                    />
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
                    <div
                      key={id}
                      className='worksContainer-img'
                      style={{
                        backgroundImage: `url(${url})`,
                      }}
                    />
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
