import { InfoBlock } from '../../../../components/InfoBlock';
import { Typography } from '../../../../components/Typography';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { createApi } from 'unsplash-js';
import { useState, useEffect } from 'react';
import './OurWork.scss';

const unsplash = createApi({
  accessKey: `${process.env.REACT_APP_NOTHING_INTERESTING}`,
});

const processResponseData = (image) => {
  return {
    id: image.id,
    url: image.urls.regular,
  };
};

export const OurWork = () => {
  const [images, setImages] = useState({
    firstTab: [],
    secondTab: [],
    thirdTab: [],
    fourthTab: [],
  });

  const getRandomImagesFromTabs = (array, number) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, number);
  };

  const randomTab = (array) => {
    const [
      randomImagesFromFirstTab,
      randomImagesFromSecondTab,
      randomImagesFromThirdTab,
    ] = array.map((tab) => getRandomImagesFromTabs(tab, 2));

    const mergeImagesFromTabs = [
      ...randomImagesFromFirstTab,
      ...randomImagesFromSecondTab,
      ...randomImagesFromThirdTab,
    ];

    return mergeImagesFromTabs;
  };

  useEffect(() => {
    const fetchImagesUrls = async (collectionIds = []) => {
      if (!collectionIds.length) return;

      const [secondTab, thirdTab, fourthTab] = await Promise.all(
        collectionIds.map((id) =>
          unsplash.photos.getRandom({
            collectionIds: [id],
            count: 6,
          })
        )
      );

      const tabs = {
        secondTab: secondTab.response.map(processResponseData),
        thirdTab: thirdTab.response.map(processResponseData),
        fourthTab: fourthTab.response.map(processResponseData),
      };

      const mergeTabs = {
        ...tabs,
        firstTab: randomTab([tabs.secondTab, tabs.thirdTab, tabs.fourthTab]),
      };

      setImages(mergeTabs);
    };
    fetchImagesUrls([528639, 'h4BD0NfPm6s', 8504570]);

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
              {images.firstTab.map(
                (
                  { id, url } // ! Remove testTab!
                ) => (
                  <div
                    key={id}
                    className='worksContainer-img'
                    style={{
                      backgroundImage: `url(${url})`,
                    }}
                  />
                )
              )}
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
          <TabPanel className='tabPanel'>
            <div className='worksContainer'>
              {images.fourthTab.map(({ id, url }) => (
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
