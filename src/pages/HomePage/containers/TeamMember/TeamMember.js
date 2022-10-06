import { useEffect } from 'react';
import { InfoBlock } from '../../../../components/InfoBlock';
import { SocialBlock } from '../../../../components/SocialBlock';
import { Typography } from '../../../../components/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './usersSlice';
import { ScaleLoader } from 'react-spinners';
import './TeamMember.scss';

const TeamMember = () => {
  const dispatch = useDispatch();
  const usersTest = useSelector((state) => state.users);
  const userStatus = useSelector((state) => state.users.status);

  useEffect(() => {
    if (userStatus === 'idle') {
      dispatch(fetchUsers());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userStatus, dispatch]);

  console.log(usersTest);

  return (
    <section className='teamMember'>
      <div className='sectionWrapper'>
        <InfoBlock
          title='Team Member'
          heading='We Have Some Awesome People'
          highlight='Some Awesome'
          button='none'
        />
        {userStatus !== 'succeeded' ? (
          <ScaleLoader className='spinner' color='#FF5300' width='10px' height='50px' />
        ) : (
          <div className='bottomContainer'>
            {usersTest.users.map(({ name, position, photo }) => (
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
        )}
      </div>
    </section>
  );
};

export { TeamMember };
