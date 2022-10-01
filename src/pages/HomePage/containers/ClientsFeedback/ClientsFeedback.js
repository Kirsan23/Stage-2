import { InfoBlock } from '../../../../components/InfoBlock';
import { useRef, useState, useEffect } from 'react';
import { Typography } from '../../../../components/Typography';
import { Slider } from '../../../../components/Slider/';
import './ClientsFeedback.scss';

export const ClientsFeedback = () => {
  const reviewsRef = useRef([
    {
      id: 1,
      name: 'Justin Septimus',
      position: 'CEO,word yt',
      photo: require('../../../../img/JustinSeptimus.png'),
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a laoreet libero dis eget maecenas bibendum. Morbi lacinia eu, etiam volutpat morbi et amet, sagittis adipiscing.',
    },
    {
      id: 2,
      name: 'Ashlynn Gouse',
      position: 'Managing Director',
      photo: require('../../../../img/AshlynnGouse.png'),
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a laoreet libero dis eget maecenas bibendum. Morbi lacinia eu, etiam volutpat morbi et amet, sagittis adipiscing.',
    },
    {
      id: 3,
      name: 'Justin Septimus',
      position: 'CEO,word yt',
      photo: require('../../../../img/JustinSeptimus.png'),
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a laoreet libero dis eget maecenas bibendum. Morbi lacinia eu, etiam volutpat morbi et amet, sagittis adipiscing.',
    },
    {
      id: 4,
      name: 'Ashlynn Gouse',
      position: 'Managing Director',
      photo: require('../../../../img/AshlynnGouse.png'),
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a laoreet libero dis eget maecenas bibendum. Morbi lacinia eu, etiam volutpat morbi et amet, sagittis adipiscing.',
    },
    {
      id: 5,
      name: 'Justin Septimus',
      position: 'CEO,word yt',
      photo: require('../../../../img/JustinSeptimus.png'),
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a laoreet libero dis eget maecenas bibendum. Morbi lacinia eu, etiam volutpat morbi et amet, sagittis adipiscing.',
    },
  ]).current;

  // ? Can I get height in component "Slider"?
  const [divHeight, setDivHeight] = useState(0);
  const height = useRef(null);

  useEffect (() => {
    setDivHeight(height.current.clientHeight);
  },[])


  return (
    <section
      className='clientsFeedback'
      id='clients'
    >
      <div className='sectionWrapper'>
        <InfoBlock
          title='Clients Feedback'
          heading='Some Great Words From Our Clients'
          highlight='Great Words'
          button='none'
        />
        <Slider height={divHeight}>
          {reviewsRef.map(({ id, name, position, photo, review }) => (
            <div ref={height} key={id} className='review'>
              <img className='card-photo' src={photo} alt='Oh...' />
              <Typography
                className='card-name'
                component='h4'
                variant='h4'
                color='white'
              >
                {name}
              </Typography>
              <Typography
                className='card-position'
                component='h6'
                variant='h6'
                color='white'
              >
                {position}
              </Typography>
              <Typography
                className='card-text'
                component='p'
                color='white'
              >
                {review}
              </Typography>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
