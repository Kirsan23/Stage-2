import { InfoBlock } from '../../../../components/InfoBlock';
import { Typography } from '../../../../components/Typography';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { createApi } from 'unsplash-js';
import { useState, useEffect } from 'react';
import { PacmanLoader } from 'react-spinners';
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
    testTab: [],
    firstTab: [],
    secondTab: [],
    thirdTab: [],
  });

  const testConst = (array, number) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());

    return shuffled.slice(0 , number);
  }

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
        // testTab: testConst(images.firstTab, 2)
      }, console.log(images.firstTab, images.testTab));
      // setImages(testTab: images.firstTab[Math.floor(Math.random() * images.firstTab.length)])
      console.log(images.firstTab, 'in func')
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
              {!images.firstTab ? <PacmanLoader color='#FF5300' /> : images.firstTab.map(({ id, url }) => ( // ! Remove testTab!
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
              {!images.secondTab ? <PacmanLoader color='#FF5300' /> : images.secondTab.map(({ id, url }) => (
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
              {!images.thirdTab ? <PacmanLoader color='#FF5300' /> : images.thirdTab.map(({ id, url }) => (
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
              {!images.testTab ? <PacmanLoader color='#FF5300' /> : images.testTab.map(({ id, url }) => (
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
