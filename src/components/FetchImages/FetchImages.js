import { createApi } from 'unsplash-js';
import PropTypes from 'prop-types';
import { PropagateLoader } from 'react-spinners';
import { useState, useEffect } from 'react';

const getRandomImageFromUnsplash = createApi({
  accessKey: 'sImBf3MUWlUOZIdy6bZYHV2ajvR2fFEosADCN2gVED4',
  // apiUrl: 'http://localhost:3000/unsplash-proxy',
});

export const FetchImages = (props) => {
  const [images, setImages] = useState([]);
  const {
    className = 'imageContainer',
    collection = '528639',
    count = '1',
  } = props;

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
      const response = await getRandomImageFromUnsplash.photos.getRandom({
        collectionIds: [collection],
        count: count,
      });

      setImages(
        response.response.map((image) => ({
          id: image.id,
          url: image.urls.full,
        }))
      );
    };

    fetchImagesUrls();
    // ! https://bobbyhadz.com/blog/react-hook-useeffect-has-missing-dependency (fix 'useEffect has missing dependencies')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!images) return <PropagateLoader color='#FF5300' />;

  return (
    <>
      <div className={className}>
        {images.map(({ id, url }) => (
          <div
            key={id}
            className={`${className}-img`}
            style={{
              backgroundImage: `url(${url})`,
            }}
          />
        ))}
      </div>
    </>
  );
};

FetchImages.propTypes = {
  collection: PropTypes.string,
  count: PropTypes.string,
  className: PropTypes.string,
};
