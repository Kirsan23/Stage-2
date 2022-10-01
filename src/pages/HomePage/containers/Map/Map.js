import { useRef } from 'react';
import './Map.scss';

export const Map = () => {
  const images = useRef([
    { id: 1, image: require(`../../../../img/GlutenFree.png`) },
    { id: 2, image: require(`../../../../img/Butchery.png`) },
    { id: 3, image: require(`../../../../img/OrganicProduct.png`) },
    { id: 4, image: require(`../../../../img/Restaurant.png`) },
  ]).current;

  return (
    <section className='map'>
      {/* <iframe
        className='map'
        title='map'
        loading='lazy'
        allowfullscreen
      ></iframe> */}
      <div className='sectionWrapper'>
        <div className='map-wrapper'>
          <img
            className='map-img'
            src={require(`../../../../img/Map.png`)}
            alt='Oh...'
          />
        </div>
        <div className='additional'>
          {images.map(({ id, image }) => (
            <img
              key={id}
              className='additional-img'
              src={image}
              alt='Oh...'
            />
          ))}
        </div>
      </div>
    </section>
  );
};
