import { InfoBlock } from '../../components/InfoBlock';
import { Typography } from '../../components/Typography';
import { SocialBlock } from '../../components/SocialBlock';
import { useContext } from 'react';
import { DarkModeContext } from '../../components/Context';
import './TeamMember.scss';
import { ForTest } from '../../components/ForTest';

export function TeamMember() {
  const { darkMode } = useContext(DarkModeContext);
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
          <ForTest />
        </div>
      </div>
      {/* <div className='team-member-block'>
        <InfoBlock
          title='Team Member'
          heading='We Have Some Awesome People'
          highlight='Some Awesome'
          button='none'
        />
        <div className='team-member-bottom-block'>
          <div className='team-member-bottom-block'>
            <ForTest />
            <SocialBlock className='team-member-bottom-block-card-social' />
          </div>
          <div className='team-member-bottom-block-card'>
            <div className='team-member-bottom-block-card-top'>
              <img
                className='team-member-bottom-block-card-img'
                src={require(`../../img/Phillip-Curtis.png`)}
                alt='Oh...'
              />
            </div>
            <div className='team-member-bottom-block-card-bottom'>
              <Typography
                className='team-member-bottom-block-card-bottom-name'
                component='h5'
                variant='h5'
              >
                Phillip Curtis
              </Typography>
              <Typography
                className='team-member-bottom-block-card-bottom-prof'
                component='h6'
                variant='h6'
                color='gray'
              >
                Graphic Designer
              </Typography>
            </div>
          </div>
          <div className='team-member-bottom-block-card'>
            <div className='team-member-bottom-block-card-top'>
              <img
                className='team-member-bottom-block-card-img'
                src={require(`../../img/Talan-Torff.png`)}
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
                Talan Torff
              </Typography>
              <Typography
                className='team-member-bottom-block-card-bottom-prof'
                component='h6'
                variant='h6'
                color='gray'
              >
                Web Developer
              </Typography>
            </div>
          </div>
          <div className='team-member-bottom-block-card'>
            <div className='team-member-bottom-block-card-top'>
              <img
                className='team-member-bottom-block-card-img'
                src={require(`../../img/Abram-Vaccaro.png`)}
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
                Abram Vaccaro
              </Typography>
              <Typography
                className='team-member-bottom-block-card-bottom-prof'
                component='h6'
                variant='h6'
                color='gray'
              >
                App Developer
              </Typography>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
