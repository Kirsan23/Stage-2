import './ForTest.scss';
import { createApi } from 'unsplash-js';
import { useState, useEffect, useRef, useCallback } from 'react';

export const ForTest = (props) => {
  const [images, setImages] = useState();
  const { className, collection, count = '1' } = props;
  const getRandomImageFromUnsplash = createApi({
    accessKey: `${process.env.REACT_APP_NOTHING_INTERESTING}`,
    // apiUrl: 'http://localhost:3000/unsplash-proxy',
  });

  // * VARIANT #1
  // useEffect(() => {
  //   getRandomImageFromUnsplash.photos
  //     .getRandom({ collectionIds: ['528639'], count: count })
  //     .then((result) => {
  //       const urls = result.response.map((image) => image.urls.small);
  //       setImages(urls);
  //     })
  //     .catch(() => {
  //       console.log('something went wrong!');
  //     });
  // }, []);

  // * VARIANT #2
  useEffect(() => {
    const fetchImagesUrls = async () => {
      const response = await getRandomImageFromUnsplash.photos.getRandom(
        { collectionIds: ['528639'], count: count }
      );
      const imagesUrls = await response.response.map(
        (image) => image.urls.small
      );
      console.log(response);
      setImages(imagesUrls);
    };

    fetchImagesUrls();
  }, []);

  if (!images) return <h1>Loading. Please wait!</h1>;
  else
    return (
      <>
        <div className='worksContainer'>
          <div
            style={{
              backgroundImage: `url(${images[0]})`,
              backgroundRepeat: 'no-repeat',
              width: '370px',
              height: '370px',
              backgroundSize: 'cover',
              marginBottom: '30px',
            }}
          />
          <div
            style={{
              backgroundImage: `url(${images[1]})`,
              backgroundRepeat: 'no-repeat',
              width: '370px',
              height: '470px',
              backgroundSize: 'cover',
            }}
          />
        </div>
      </>
    );
};
