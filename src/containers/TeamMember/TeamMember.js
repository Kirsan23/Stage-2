import { InfoBlock } from '../../components/InfoBlock';
import { useContext } from 'react';
import { DarkModeContext } from '../../components/Context';
import { SocialBlock } from '../../components/SocialBlock';
import { Typography } from '../../components/Typography';
import './TeamMember.scss';

export const TeamMember = () => {
  const { darkMode } = useContext(DarkModeContext);
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
    <section
      className={`team-member ${darkMode ? `dark-theme` : `light-theme`}`}
    >
      <div className='team-member-block'>
        <InfoBlock
          title='Team Member'
          heading='We Have Some Awesome People'
          highlight='Some Awesome'
          button='none'
        />
        <div className='team-member-bottom-block'>
          {users.map(({ id, name, position, photo }) => (
            <div key={id} className='team-member-bottom-block-card'>
              <div className='team-member-bottom-block-card-top'>
                <img
                  className='team-member-bottom-block-card-img'
                  src={photo}
                  alt='Oh...'
                />
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
        </div>
      </div>
    </section>
  );
}
