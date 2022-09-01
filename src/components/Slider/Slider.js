import { useState } from 'react';
import './Slider.scss';

export const Slider = () => {
  const [count, setCount] = useState(0);
  const handleClick = (val) => {
    if (val === 'prev') {
      count > 0 ? setCount(count - 1) : setCount(items.length);
    } else if (val === 'main') {
      setCount(0);
    } else if (val === 'next') {
      count < items.length - 1 ? setCount(count + 1) : setCount(0);
    }
  };

  const items = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  return (
    <div className='wrapper'>
      <div className='slider'>
        {items.map(({ id }) => (
          <div
            key={id}
            className={`item${`-${id}`} ${
              count === id - 1
                ? 'visible'
                : count === id
                ? 'invisible-post'
                : 'invisible-pre'
            }`}
          ></div>
        ))}
      </div>
      <div className='btns'>
        <button className='prev' onClick={() => handleClick('prev')}></button>
        <button className='main' onClick={() => handleClick('main')}></button>
        <button className='next' onClick={() => handleClick('next')}></button>
      </div>
    </div>
  );
};
