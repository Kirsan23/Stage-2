import { InfoBlock } from '../../components/InfoBlock';
import { useContext } from 'react';
import { DarkModeContext } from '../../components/Context';
import { useState } from 'react';
import './ClientsFeedback.scss';

export const ClientsFeedback = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <section
      className={`clients-feedback ${darkMode ? `dark-theme` : `light-theme`}`}
    >
      <div className='clients-feedback-block'>
        <InfoBlock
          title='Clients Feedback'
          heading='Some Great Words From Our Clients'
          highlight='Great Words'
          button='none'
        ></InfoBlock>
        <div className='clients-feedback-block-slider'>
          <div
            className={`${'clients-feedback-block-slider-item-1'} ${
              isActive ? 'test-1' : ''
            }`}
          ></div>
          <div
            className={`${'clients-feedback-block-slider-item-2'} ${
              isActive ? 'test-2' : ''
            }`}
          ></div>
          <div
            className={`${'clients-feedback-block-slider-item-3'} ${
              isActive ? 'test-3' : ''
            }`}
          ></div>
        </div>
        <div className='button'>
          <button className='' onClick={handleClick}>
            Test
          </button>
        </div>
      </div>
    </section>
  );
};
