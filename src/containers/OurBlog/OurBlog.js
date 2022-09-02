import { InfoBlock } from '../../components/InfoBlock';
import { useContext } from 'react';
import { DarkModeContext } from '../../components/Context';
import { Slider } from '../../components/Slider';
import './OurBlog.scss';

export const OurBlog = () => {
  const { darkMode } = useContext(DarkModeContext);
  const reviews = [
    {
      id: 1,
      name: 'Cristofer Westervelt',
      position: 'Graphic Design',
      photo: require('../../img/CristoferWestervelt.png'),
      picture: require('../../img/CristoferWestervelt_pic.png'),
      text:
        '35 Stellar Graphic Design Blogs to Keep You Educated and Inspired',
      date: '',
    },
    {
      id: 2,
      name: 'Haylie Mango',
      position: 'Managing Director',
      photo: require('../../img/HaylieMango.png'),
      picture: require('../../img/HaylieMango_pic.png'),
      review:
        'Ridiculously powerful 2021 iPad Pro may drop this month',
      date: '',
    },
    {
      id: 3,
      name: 'Justin Septimus',
      position: 'CEO,word yt',
      photo: require('../../img/JustinSeptimus.png'),
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a laoreet libero dis eget maecenas bibendum. Morbi lacinia eu, etiam volutpat morbi et amet, sagittis adipiscing.',
    },
    {
      id: 4,
      name: 'Ashlynn Gouse',
      position: 'Managing Director',
      photo: require('../../img/AshlynnGouse.png'),
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a laoreet libero dis eget maecenas bibendum. Morbi lacinia eu, etiam volutpat morbi et amet, sagittis adipiscing.',
    },
    {
      id: 5,
      name: 'Justin Septimus',
      position: 'CEO,word yt',
      photo: require('../../img/JustinSeptimus.png'),
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a laoreet libero dis eget maecenas bibendum. Morbi lacinia eu, etiam volutpat morbi et amet, sagittis adipiscing.',
    },
  ];

  return (
    <section className={`our-blog ${darkMode ? `dark-theme` : `light-theme`}`}>
      <div className='our-blog main-block'>
        <InfoBlock
          title='Our Blog'
          heading='Our Latest Blogs Will Keep Everyone Updated'
          highlight='Blogs Will Keep'
          button='none'
        ></InfoBlock>
        {/* <Slider /> */}
      </div>
    </section>
  );
};
