import { InfoBlock } from '../../../../components/InfoBlock';
import { useContext } from 'react';
import { DarkModeContext } from '../../../../components/Context';
import { Slider } from '../../../../components/Slider';
import './OurBlog.scss';
import { Typography } from '../../../../components/Typography';

export const OurBlog = () => {
  const { darkMode } = useContext(DarkModeContext);
  const reviews = [
    {
      id: 1,
      name: 'Cristofer Westervelt',
      position: 'Graphic Design',
      photo: require('../../../../img/CristoferWestervelt.png'),
      picture: require('../../../../img/CristoferWestervelt_pic.png'),
      text: '35 Stellar Graphic Design Blogs to Keep You Educated and Inspired',
      date: `January 25, 2021 5 min Read`,
    },
    {
      id: 2,
      name: 'Haylie Mango',
      position: 'Managing Director',
      photo: require('../../../../img/HaylieMango.png'),
      picture: require('../../../../img/HaylieMango_pic.png'),
      text: 'Ridiculously powerful 2021 iPad Pro may drop this month',
      date: '',
    },
    {
      id: 3,
      name: 'Cristofer Westervelt',
      position: 'Graphic Design',
      photo: require('../../../../img/CristoferWestervelt.png'),
      picture: require('../../../../img/CristoferWestervelt_pic.png'),
      text: '35 Stellar Graphic Design Blogs to Keep You Educated and Inspired',
      date: `January 25, 2021 5 min Read`,
    },
    {
      id: 4,
      name: 'Haylie Mango',
      position: 'Managing Director',
      photo: require('../../../../img/HaylieMango.png'),
      picture: require('../../../../img/HaylieMango_pic.png'),
      text: 'Ridiculously powerful 2021 iPad Pro may drop this month',
      date: '',
    },
    {
      id: 5,
      name: 'Cristofer Westervelt',
      position: 'Graphic Design',
      photo: require('../../../../img/CristoferWestervelt.png'),
      picture: require('../../../../img/CristoferWestervelt_pic.png'),
      text: '35 Stellar Graphic Design Blogs to Keep You Educated and Inspired',
      date: `January 25, 2021 5 min Read`,
    },
  ];

  return (
    <section className={`our-blog ${darkMode ? `dark-theme` : `light-theme`}`} id='ourBlog'>
      <div className='our-blog main-block'>
        <InfoBlock
          title='Our Blog'
          heading='Our Latest Blogs Will Keep Everyone Updated'
          highlight='Blogs Will Keep'
          button='none'
        ></InfoBlock>
        <Slider height='295px'>
          {reviews.map(({ id, name, position, photo, picture, text, date }) => (
            <div key={id} className='blog-card'>
              <div className='blog-card-left'>
                <Typography className='blog-card-position' component='h6' variant='h6' color='orange'>
                  {position}
                </Typography>
                <Typography className='blog-card-text' component='h4' variant='h4'>{text}</Typography>
                <div className='blog-card-user'>
                  <img className='blog-card-photo' src={photo} alt='Oh...' />
                  <div className='blog-card-user-info'>
                    <Typography className='blog-card-name' component='h5' variant='h5'>{name}</Typography>
                    <Typography className='blog-card-date' component='p' color='gray'>{date}</Typography>
                  </div>
                </div>
              </div>
              <img className='blog-card-picture' src={picture} alt='Oh...' />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
