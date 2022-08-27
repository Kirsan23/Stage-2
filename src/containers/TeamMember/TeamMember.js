import { InfoBlock } from '../../components/InfoBlock';
import './TeamMember.scss';
import { Typography } from '../../components/Typography';
import { ImgPaste } from '../../components/ImgPaste';
import { SocialBlock } from '../../components/SocialBlock';
import { useContext } from 'react';
import { DarkModeContext } from '../../components/Context';

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
          {/* Please use array of objects and .map() function to print out similar items */}
          <div className='team-member-bottom-block-card'>
            <div className='team-member-bottom-block-card-top'>
              <ImgPaste
                sectionName='team-member-bottom-block-card'
                name='Gustavo-Herwitz'
              />
              <SocialBlock className='team-member-bottom-block-card-social' />
            </div>
            <div className='team-member-bottom-block-card-bottom'>
              <Typography
                className='team-member-bottom-block-card-bottom-name'
                component='h5'
                variant='h5'
              >
                Gustavo Herwitz
              </Typography>
              <Typography
                className='team-member-bottom-block-card-bottom-prof'
                component='h6'
                variant='h6'
                color='gray'
              >
                UI/UX Designer
              </Typography>
            </div>
          </div>
          <div className='team-member-bottom-block-card'>
            <div className='team-member-bottom-block-card-top'>
              <ImgPaste
                sectionName='team-member-bottom-block-card'
                name='Phillip-Curtis'
              />
              <SocialBlock className='team-member-bottom-block-card-social' />
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
              <ImgPaste // Can we use regular <img /> here. Additional component requires additional memory
                sectionName='team-member-bottom-block-card'
                name='Talan-Torff'
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
              <ImgPaste
                sectionName='team-member-bottom-block-card'
                name='Abram-Vaccaro'
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
      </div>
    </section>
  );
}
