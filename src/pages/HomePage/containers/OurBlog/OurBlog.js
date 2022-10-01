import { InfoBlock } from '../../../../components/InfoBlock';
import { Slider } from '../../../../components/Slider';
import { Typography } from '../../../../components/Typography';
import { useRef, useState, useEffect } from 'react';
import './OurBlog.scss';

export const OurBlog = () => {
  const reviews = useRef([
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
  ]).current;

  // ? Can I get height in component "Slider"?
  const [divHeight, setDivHeight] = useState(0);
  const height = useRef(null);

  useEffect(() => {
    setDivHeight(height.current.clientHeight);
  }, []);

  return (
    <section className='ourBlog' id='ourBlog'>
      <div className='sectionWrapper'>
        <InfoBlock
          title='Our Blog'
          heading='Our Latest Blogs Will Keep Everyone Updated'
          highlight='Blogs Will Keep'
          button='none'
        ></InfoBlock>
        <Slider height={divHeight}>
          {reviews.map(
            ({ id, name, position, photo, picture, text, date }) => (
              <div ref={height} key={id} className='card'>
                <div className='card-left'>
                  <Typography
                    className='card-position'
                    component='h6'
                    variant='h6'
                    color='orange'
                  >
                    {position}
                  </Typography>
                  <Typography
                    className='card-text'
                    component='h4'
                    variant='h4'
                  >
                    {text}
                  </Typography>
                  <div className='card-user'>
                    <img className='card-photo' src={photo} alt='Oh...' />
                    <div className='card-user-info'>
                      <Typography
                        className='card-name'
                        component='h5'
                        variant='h5'
                      >
                        {name}
                      </Typography>
                      <Typography
                        className='card-date'
                        component='p'
                        color='gray'
                      >
                        {date}
                      </Typography>
                    </div>
                  </div>
                </div>
                <img className='card-picture' src={picture} alt='Oh...' />
              </div>
            )
          )}
        </Slider>
      </div>
    </section>
  );
};
