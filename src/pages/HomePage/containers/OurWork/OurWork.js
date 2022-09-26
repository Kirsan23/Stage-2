import { InfoBlock } from '../../../../components/InfoBlock';
import { Typography } from '../../../../components/Typography';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { createApi } from 'unsplash-js';
import { useState, useEffect } from 'react';
import './OurWork.scss';

export const OurWork = () => {
  // TODO: request images for tabs from - https://github.com/unsplash/unsplash-js
  // ? DONE?
  // ? Can I stop re-render when tabs are switched?

  const [images, setImages] = useState({
    firstTab: [],
    secondTab: [],
    thirdTab: [],
  });
  const getRandomImageFromUnsplash = createApi({
    accessKey: `${process.env.REACT_APP_NOTHING_INTERESTING}`,
  });

  useEffect(() => {
    const fetchImagesUrls = async () => {
      const responseForFirstTab =
        await getRandomImageFromUnsplash.photos.getRandom({
          collectionIds: [528639],
          count: 6,
        });
      const dataForFirstTab = await responseForFirstTab.response.map(
        (image) => ({
          id: image.id,
          url: image.urls.full,
        })
      );

      const responseForSecondTab =
        await getRandomImageFromUnsplash.photos.getRandom({
          collectionIds: ['h4BD0NfPm6s'],
          count: 6,
        });
      const dataForSecondTab = await responseForSecondTab.response.map(
        (image) => ({
          id: image.id,
          url: image.urls.full,
        })
      );

      const responseForThirdTab =
        await getRandomImageFromUnsplash.photos.getRandom({
          collectionIds: [8504570],
          count: 6,
        });
      const dataForThirdTab = await responseForThirdTab.response.map(
        (image) => ({
          id: image.id,
          url: image.urls.full,
        })
      );

      setImages((prevState) => ({
        ...prevState,
        firstTab: dataForFirstTab,
        secondTab: dataForSecondTab,
        thirdTab: dataForThirdTab,
      }));
    };

    fetchImagesUrls();
    // ! https://bobbyhadz.com/blog/react-hook-useeffect-has-missing-dependency (fix 'useEffect has missing dependencies')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className='ourWork' id='ourWork'>
      <div className='sectionWrapper'>
        <InfoBlock
          title='Our Work'
          heading={'We Have Some Designed & Development Projects'}
          highlight={'Designed & Development'}
          button='none'
        ></InfoBlock>
        {/* TODO: make tabs work - DONE!*/}
        {/* All / Graphic Design / UI/UX Design / Web Development - each tab needs to show different images - DONE**/}
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
            {/* <FetchImages count='6' collection='528639' className='worksContainer'/> */}
            <div className='worksContainer'>
              {images.firstTab.map(({ id, url }) => (
                <div
                  key={id}
                  className='worksContainer-img'
                  style={{
                    backgroundImage: `url(${url})`,
                  }}
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel className='tabPanel'>
            <div className='worksContainer'>
              {images.firstTab.map(({ id, url }) => (
                <div
                  key={id}
                  className='worksContainer-img'
                  style={{
                    backgroundImage: `url(${url})`,
                  }}
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel className='tabPanel'>
            <div className='worksContainer'>
              {images.secondTab.map(({ id, url }) => (
                <div
                  key={id}
                  className='worksContainer-img'
                  style={{
                    backgroundImage: `url(${url})`,
                  }}
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel className='tabPanel'>
            <div className='worksContainer'>
              {images.thirdTab.map(({ id, url }) => (
                <div
                  key={id}
                  className='worksContainer-img'
                  style={{
                    backgroundImage: `url(${url})`,
                  }}
                />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};
