import { useRef } from 'react';
import { Typography } from '../../../../components/Typography';
import { Highlighter } from '../../../../components/Highlighter';
import { SocialBlock } from '../../../../components/SocialBlock';
import { Navigation } from '../../../../components/Navigation';
import { Button } from '../../../../components/Button';
import './Footer.scss';

export const Footer = () => {

  const servicesRef = useRef([
    {item: 'Graphic Design'},
    {item: 'UI/UX Design'},
    {item: 'Web Development'},
    {item: 'App Development'},
    {item: 'Web Hosting'},
  ]).current

  return (
    <section className={`footer`}>
      <div className='top'>
        <div className='top-wrapper'>
          <div className='top-digiency'>
            <Highlighter
              className='top-title'
              heading='Digiency'
              highlight='Digie'
              color='white'
            />
            <div className='betweener'>
              <Typography component='p' color='white'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a
                laoreet libero dis eget maecenas bibendum.
              </Typography>
              <SocialBlock direction='horizontal' />
            </div>
          </div>
          <div className='top-company'>
            <Typography
              className='top-title'
              variant='h2'
              component='h2'
              color='white'
            >
              Company
            </Typography>
            <Navigation
              className='top-list'
              direction='vertical'
              variant='h6'
              color='white'
            />
          </div>
          <div className='top-services'>
            <Typography
              className='top-title'
              variant='h2'
              component='h2'
              color='white'
            >
              Services
            </Typography>
            <Typography className='top-list' color='white' component='div'>
              <ul>
                {servicesRef.map(({item}) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Typography>
          </div>
          <div className='top-newsletter'>
            <Typography
              className='top-title'
              variant='h2'
              component='h2'
              color='white'
            >
              Newsletter
            </Typography>
            <div className='betweener'>
              <Typography component='p' color='white'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                eget varius viverra in.
              </Typography>
              <form className='newsletter_from'>
                <input
                  type='email'
                  placeholder='info@gmail.com'
                  className='top-newsletter-email'
                />
                <Button className='submit_btn'><span className='icon-send-plane-fill' /></Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <div className='bottom-wrapper'>
          <div className='bottom-text'>
            <span>&copy;</span>
            <Typography component='h6' color='white'>
              Copyright 2021. All Right Reserved By Ojjomedia
            </Typography>
          </div>
          <div className='bottom-text'>
            <a href='#heroSection'><span className='icon-arrow-up-fill'/></a>
          </div>
        </div>
      </div>
    </section>
  );
};
