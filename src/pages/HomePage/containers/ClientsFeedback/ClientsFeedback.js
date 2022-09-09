import { InfoBlock } from '../../../../components/InfoBlock';
import { useContext } from 'react';
import { DarkModeContext } from '../../../../components/Context';
import { Typography } from '../../../../components/Typography';
import { Slider } from '../../../../components/Slider/';
import './ClientsFeedback.scss';

export const ClientsFeedback = () => {
  const { darkMode } = useContext(DarkModeContext);
  const reviews = [
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
  ];

  return (
    <section
      className={`clients-feedback ${darkMode ? `dark-theme` : `light-theme`}`} id='clients'
    >
      <div className='main-block'>
        <InfoBlock
          title='Clients Feedback'
          heading='Some Great Words From Our Clients'
          highlight='Great Words'
          button='none'
        />
        <Slider height='250px'>
        {reviews.map(({ id, name, position, photo, review }) => (
              <div key={id} className='review-card'>
                <img
                  className='review-card-photo'
                  src={photo}
                  alt='Oh...'
                />
                <Typography
                  className='review-card-name'
                  component='h4'
                  variant='h4'
                  color='white'
                >
                  {name}
                </Typography>
                <Typography
                  className='review-card-position'
                  component='h6'
                  variant='h6'
                  color='white'
                >
                  {position}
                </Typography>
                <Typography
                  className='review-card-text'
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
