import { InfoBlock } from '../../components/InfoBlock';
import { useContext } from 'react';
import { DarkModeContext } from '../../components/Context';
import { useState } from 'react';
import './ClientsFeedback.scss';

export const ClientsFeedback = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [count, setCount] = useState(0);
  const handleClick = () => {
    count < items.length - 1 ? setCount(count + 1) : setCount(0);
  };
  const items = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];

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
        {items.map(({ id }) => (
            <div key={id} className={`clients-feedback-block-slider-item${`-${id}`} ${
              count === id - 1 ? 'visible' : count === id ? 'invisible-post' : 'invisible-pre'
            }`}>
            </div>
          ))}
        </div>
        <div className='button'>
          <button onClick={handleClick}>Test</button>
        </div>
      </div>
    </section>
  );
};
