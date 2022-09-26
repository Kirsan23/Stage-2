import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { InfoBlock } from '../../../../components/InfoBlock';
import { SocialBlock } from '../../../../components/SocialBlock';
import { Typography } from '../../../../components/Typography';
import './TeamMember.scss';

const TeamMember = () => {
  // TODO: use https://fakerapi.it/en for this section
  // * DONE (photo and name may not match gender Oo )!
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const userPositions = useRef([
    'UI/UX Designer',
    'Graphic Designer',
    'Web Developer',
    'App Developer',
  ]).current;

  useEffect(() => {
    const getUsersData = async () => {
      try {
        const response = await axios.get(
          `https://randomuser.me/api/?results=4`
        );
        if (!response.ok) {
          throw new Error(`Error: The status is ${response.status}`);
        }

        const users = response.data.results.map((user, index) => ({
          name: `${user.name.first} ${user.name.last}`,
          photo: user.picture.large,
          position: userPositions[index],
        }));

        setUsers(users); // <<<<
        setError(null); // <<<<
      } catch (err) {
        setError(err.message);
        setUsers(null);
      } finally {
        setLoading(false); // <<<<
      }
    };

    getUsersData();
  }, []);

  console.log(1);

  return (
    <section className='teamMember'>
      {loading && <h1>Loading...</h1>}
      {error && (
        <h1>{`There is a problem fetching the post data - ${error}`}</h1>
      )}
      <div className='sectionWrapper'>
        <InfoBlock
          title='Team Member'
          heading='We Have Some Awesome People'
          highlight='Some Awesome'
          button='none'
        />
        <div className='bottomContainer'>
          {users &&
            users.map(({ name, position, photo }) => (
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
