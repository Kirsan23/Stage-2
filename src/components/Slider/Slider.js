import { useCallback, useState } from 'react';
import './Slider.scss';

export const Slider = (props) => {
  const [count, setCount] = useState(0);
  const { children, height = '250' } = props;

  const onPrevClickHandler = useCallback(() => {
    setCount((prevState) =>
      prevState > 0 ? prevState - 1 : children.length - 1
    );
  }, []);

  const onNextClickHandler = useCallback(() => {
    setCount((prevState) =>
      prevState < children.length - 1 ? prevState + 1 : 0
    );
  }, []);

  const onResetClickHandler = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div className='sliderWrapper'>
      <div className='slider' style={{height: `${height}px`}}>
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
      <div className='buttonPanel'>
        <button
          className='prevSlide'
          onClick={() => onPrevClickHandler()}
        ></button>
        <button
          className='resetSlide'
          onClick={() => onResetClickHandler()}
        ></button>
        <button
          className='nextSlide'
          onClick={() => onNextClickHandler()}
        ></button>
      </div>
    </div>
  );
};
