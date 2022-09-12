import { InfoBlock } from '../../../../components/InfoBlock';
import { SocialBlock } from '../../../../components/SocialBlock';
import { Typography } from '../../../../components/Typography';
import './TeamMember.scss';

export const TeamMember = () => {
  // TODO: use https://fakerapi.it/en for this section

  const users = [
    {
      id: 1,
      name: 'Gustavo Herwitz',
      position: 'UI/UX Designer',
      photo: require('../../../../img/Gustavo-Herwitz.png'),
    },
    {
      id: 2,
      name: 'Phillip Curtis',
      position: 'Graphic Designer',
      photo: require('../../../../img/Phillip-Curtis.png'),
    },
    {
      id: 3,
      name: 'Talan Torff',
      position: 'Web Developer',
      photo: require('../../../../img/Talan-Torff.png'),
    },
    {
      id: 4,
      name: 'Abram Vaccaro',
      position: 'App Developer',
      photo: require('../../../../img/Abram-Vaccaro.png'),
    },
  ];
  return (
    <section className={'teamMember'}>
      <div className='sectionWrapper'>
        <InfoBlock
          title='Team Member'
          heading='We Have Some Awesome People'
          highlight='Some Awesome'
          button='none'
        />
        <div className='bottomContainer'>
          {users.map(({ id, name, position, photo }) => (
            <div key={id} className='card'>
              <div className='card-top'>
                <img
                  className='card-img'
                  src={photo}
                  alt='Oh...'
                />
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
