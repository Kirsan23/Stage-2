import { InfoBlock } from '../../components/InfoBlock';
import { useContext } from 'react';
import { DarkModeContext } from '../../components/Context';
import { Slider } from '../../components/Slider';
import './OurBlog.scss';
import { ForTest } from '../../components//ForTest';

export const OurBlog = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section className={`our-blog ${darkMode ? `dark-theme` : `light-theme`}`}>
      <div className='main-block'>
        <InfoBlock
          title='Our Blog'
          heading='Our Latest Blogs Will Keep Everyone Updated'
          highlight='Blogs Will Keep'
          button='none'
        ></InfoBlock>
        <Slider />
      </div>
    </section>
  );
};
