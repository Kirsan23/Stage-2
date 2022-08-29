import { SocialBlock } from '../SocialBlock';
import { Typography } from '../Typography';

export function ForTest(props) {
  const { className } = props;
  const users = [
    {
      id: 1,
      name: 'Gustavo Herwitz',
      position: 'UI/UX Designer',
      photo: require('../../img/Gustavo-Herwitz.png'),
    },
    {
      id: 2,
      name: 'Phillip Curtis',
      position: 'Graphic Designer',
      photo: require('../../img/Phillip-Curtis.png'),
    },
    {
      id: 3,
      name: 'Talan Torff',
      position: 'Web Developer',
      photo: require('../../img/Talan-Torff.png'),
    },
    {
      id: 4,
      name: 'Abram Vaccaro',
      position: 'App Developer',
      photo: require('../../img/Abram-Vaccaro.png'),
    },
  ];

  return (
    <>
      {users.map(({ id, name, position, photo }) => (
        <div key={id} className='team-member-bottom-block-card'>
          <div className='team-member-bottom-block-card-top'>
            <img className='team-member-bottom-block-card-img' src={photo} alt='Oh...'></img>
            <SocialBlock className='team-member-bottom-block-card-social' />
          </div>
          <div className='team-member-bottom-block-card-bottom'>
            <Typography
              className='team-member-bottom-block-card-bottom-name'
              component='h5'
              variant='h5'
            >
              {name}
            </Typography>
            <Typography
              className='team-member-bottom-block-card-bottom-prof'
              component='h6'
              variant='h6'
              color='gray'
            >
              {position}
            </Typography>
          </div>
        </div>
      ))}
    </>
  );
}
