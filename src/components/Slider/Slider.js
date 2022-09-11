import { useCallback, useState } from 'react';
import './Slider.scss';

export const Slider = (props) => {
  const [count, setCount] = useState(0);
  const { children, height = 250 } = props;
  const handleClick = (val) => {
    if (val === 'prev') {
      count > 0 ? setCount(count - 1) : setCount(children.length - 1);
    } else if (val === 'main') {
      setCount(0);
    } else if (val === 'next') {
      count < children.length - 1 ? setCount(count + 1) : setCount(0);
    }
  };

  // TODO: use 3 functions
  const onPrevClickHandler = useCallback(() => {
    // Use setCount/useState and pass callback there to get prevState
    // setCount((prevState) => { ... })
  }, []);

  const onNextClickHandler = useCallback(() => {}, []);

  const onResetClickHandler = useCallback(() => {}, []);

  return (
    <div className='wrapper'>
      <div className='slider' style={{ height: `${height}` }}>
        {children.map((children, id) => (
          <div
            key={id}
            className={`slide ${
              (count === id && 'visible') ||
              (count > id && 'invisible-post') ||
              'invisible-pre'
            }`}
          >
            {children}
          </div>
        ))}
      </div>
      {/* Don't short classNames */}
      <div className='btns'>
        <button className='prev' onClick={() => handleClick('prev')}></button>
        <button className='main' onClick={() => handleClick('main')}></button>
        <button className='next' onClick={() => handleClick('next')}></button>
      </div>
    </div>
  );
};
