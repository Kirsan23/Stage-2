import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { InfoBlock } from '../../../../components/InfoBlock';
import { SocialBlock } from '../../../../components/SocialBlock';
import { Typography } from '../../../../components/Typography';
import './TeamMember.scss';

const TeamMember = () => {
  const [users, setUsers] = useState([]);
  const userPositions = useRef([
    'UI/UX Designer',
    'Graphic Designer',
    'Web Developer',
    'App Developer',
  ]).current;

  useEffect(() => {
    const getUsersData = async () => {
      const response = await axios.get(`https://randomuser.me/api/?results=4`);
      const users = response.data.results.map((user, index) => ({
        name: `${user.name.first} ${user.name.last}`,
        photo: user.picture.large,
        position: userPositions[index],
      }));

      setUsers(users);
    };

    getUsersData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className='teamMember'>
      <div className='sectionWrapper'>
        <InfoBlock
          title='Team Member'
          heading='We Have Some Awesome People'
          highlight='Some Awesome'
          button='none'
        />
        <div className='bottomContainer'>
          {users.map(({ name, position, photo }) => (
            <div key={name} className='card'>
              <div
                className='card-top'
                style={{
                  backgroundImage: `url(${photo})`,
                }}
              >
                <SocialBlock className='card-social' />
              </div>
              <div className='card-footer'>
                <Typography
                  className='card-footer-name'
                  component='h5'
                  variant='h5'
                >
                  {name}
                </Typography>
                <Typography
                  className='card-footer-prof'
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
};

export { TeamMember };
