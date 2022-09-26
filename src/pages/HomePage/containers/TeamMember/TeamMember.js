import { useState, useEffect, useRef } from 'react';
import { InfoBlock } from '../../../../components/InfoBlock';
import { SocialBlock } from '../../../../components/SocialBlock';
import { Typography } from '../../../../components/Typography';
import './TeamMember.scss';

export const TeamMember = () => {
  // TODO: use https://fakerapi.it/en for this section
  // * DONE (photo and name may not match gender Oo )!

  const [users, setUsers] = useState();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const usersRef = useRef([
    {
      position: 'UI/UX Designer',
      // photo: require('../../../../img/Gustavo-Herwitz.png'),
    },
    {
      position: 'Graphic Designer',
      photo: require('../../../../img/Phillip-Curtis.png'),
    },
    {
      position: 'Web Developer',
      photo: require('../../../../img/Talan-Torff.png'),
    },
    {
      position: 'App Developer',
      photo: require('../../../../img/Abram-Vaccaro.png'),
    },
  ]);

  // ! Handmade!
  // useEffect(() => {
  //   const response = async () => {
  //     const fakerapiRequest = await fetch(
  //       `https://fakerapi.it/api/v1/persons?_quantity=2&_gender=male&_birthday_start=2005-01-01`
  //     );
  //     const actualData = await response.json();
  //     console.log(response);
  //     const usersData = await actualData.data.map((user) => ({
  //       name: user.firstname + ' ' + user.lastname,
  //       photo: user.image,
  //     }));
  //     console.log(usersData);
  //     setUsers(usersData);
  //     console.log('In fetchUsersData');
  //   };

  //   fetchUsersData();
  // }, []);

  // ! Taken and edited...
  useEffect(() => {
    const getUsersData = async () => {
      try {
        const response = await fetch(`https://randomuser.me/api/?results=4`);
        if (!response.ok) {
          throw new Error(`Error: The status is ${response.status}`);
        }
        const actualData = await response.json();
        // ? To take firstname, lastname and photo
        const usersName = await actualData.results.map((user) => ({
          name: user.name.first + ' ' + user.name.last,
          photo: user.picture.large,
        }));
        // ? And push them to usersRef (add to existing properties)
        const usersData = usersRef.current.map((item, index) => ({
          ...item,
          ...usersName[index],
        }));
        setUsers(usersData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setUsers(null);
      } finally {
        setLoading(false);
      }
    };
    getUsersData();
  }, []);

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
