import { InfoBlock } from '../../../../components/InfoBlock';
import { Typography } from '../../../../components/Typography';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { createApi } from 'unsplash-js';
import { useState, useEffect } from 'react';
import './OurWork.scss';

const unsplash = createApi({
  accessKey: 'sImBf3MUWlUOZIdy6bZYHV2ajvR2fFEosADCN2gVED4',
  // apiUrl: 'http://localhost:3000/unsplash-proxy',
});

const processResponseData = (image) => {
  return {
    id: image.id,
    url: image.urls.regular,
  };
};

export const OurWork = () => {
  // TODO: request images for tabs from - https://github.com/unsplash/unsplash-js
  // ? DONE?
  // ? Can I stop re-render when tabs are switched?

  const [images, setImages] = useState({
    firstTab: [],
    secondTab: [],
    thirdTab: [],
  });

  useEffect(() => {
    const fetchImagesUrls = async (collectionIds = []) => {
      if (!collectionIds.length) return;

      const [firstTab, secondTab, thirdTab] = await Promise.all(
        collectionIds.map((id) =>
          unsplash.photos.getRandom({
            collectionIds: [id],
            count: 6,
          })
        )
      );

      setImages({
        firstTab: firstTab.response.map(processResponseData),
        secondTab: secondTab.response.map(processResponseData),
        thirdTab: thirdTab.response.map(processResponseData),
      });
    };

    fetchImagesUrls([528639, 'h4BD0NfPm6s', 8504570]);
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
