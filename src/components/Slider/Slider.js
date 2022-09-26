import { useCallback, useState } from 'react';
import './Slider.scss';

export const Slider = (props) => {
  const [count, setCount] = useState(0);
  const { children, height = 250 } = props;
  // const handleClick = (val) => {
  //   if (val === 'prev') {
  //     count > 0 ? setCount(count - 1) : setCount(children.length - 1);
  //   } else if (val === 'reset') {
  //     setCount(0);
  //   } else if (val === 'next') {
  //     count < children.length - 1 ? setCount(count + 1) : setCount(0);
  //   }
  // };

  // TODO: use 3 functions-DONE?
  // const onPrevClickHandler = useCallback(() =>
  //    Use setCount/useState and pass callback there to get prevState
  //    setCount((prevState) => { ... })
  //   {}, []);

  const onPrevClickHandler = useCallback(() =>
    {
      setCount((prevState) => prevState > 0 ? prevState - 1 : children.length - 1);
    }, []);

  const onNextClickHandler = useCallback(() => {
    setCount((prevState) => prevState < children.length - 1 ? prevState + 1 : 0);
  }, []);

  const onResetClickHandler = useCallback(() => {
    setCount(0);
  }, []);

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
      {/* Don't short classNames - DONE!*/}
      <div className='buttonPanel'>
        <button className='prevSlide' onClick={() => onPrevClickHandler()}></button>
        <button className='resetSlide' onClick={() => onResetClickHandler()}></button>
        <button className='nextSlide' onClick={() => onNextClickHandler()}></button>
      </div>
    </div>
  );
};
