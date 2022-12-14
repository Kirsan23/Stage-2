import { useEffect } from 'react';
import { InfoBlock } from '../../../../components/InfoBlock';
import { SocialBlock } from '../../../../components/SocialBlock';
import { Typography } from '../../../../components/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersData } from '../../../../store/slices/usersSlice';
import { ScaleLoader } from 'react-spinners';
import './TeamMember.scss';

const TeamMember = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersData);
  const usersStatus = useSelector((state) => state.usersData.status);

  useEffect(() => {
    if (usersStatus === 'idle') {
      dispatch(fetchUsersData());
    }
  }, [usersStatus, dispatch]);

  return (
    <section className='teamMember'>
      <div className='sectionWrapper'>
        <InfoBlock
          title='Team Member'
          heading='We Have Some Awesome People'
          highlight='Some Awesome'
          button='none'
        />
        {usersStatus !== 'succeeded' ? (
          <ScaleLoader
            className='spinner'
            color='#FF5300'
            width='10px'
            height='50px'
          />
        ) : (
          <div className='bottomContainer'>
            {users.usersData.map(({ name, position, photo }) => (
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
