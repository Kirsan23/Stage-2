import { Typography } from '../../components/Typography';
import { ClockLoader } from 'react-spinners';
import { Header } from '../../containers/Header';
import { Footer } from '../../containers/Footer';
import { useContext } from 'react';
import { ThemeContext } from '../../components/Context';
import './BlogPage.scss';

export const BlogPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme}-theme pageBetweener`}>
      <Header />
      <section className='blogPage'>
        <div className='sectionWrapper'>
          <div className='infoContainer'>
            <Typography
              className='title'
              component='h1'
              variant='h1'
              color='black'
            >
              This page is under construction
            </Typography>
            <Typography
              className='subtitle'
              component='h2'
              variant='h2'
              color='black'
            >
              Please wait a bit...
            </Typography>
            <ClockLoader className='spinner' color='#FF5300' size='80px' />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
