import { useState } from 'react';
import './ForTest.scss';

export const ForTest = (props) => {
  const [count, setCount] = useState(0);
  const { children, height } = props;
  const handleClick = (val) => {
    if (val === 'prev') {
      count > 0 ? setCount(count - 1) : setCount(children.length - 1);
    } else if (val === 'main') {
      setCount(0);
    } else if (val === 'next') {
      count < children.length - 1 ? setCount(count + 1) : setCount(0);
    }
  };

  return (
    <div className='wrapper'>
      <div className='slider_test' style={{height: `${height}`}}>
        {/* {children.map((children, id) => (
          <div key={id} className={`slide ${
            count === id
              ? 'visible'
              : count > id
              ? 'invisible-post'
              : 'invisible-pre'
          }`}>{children}</div>
        ))} */}
                {children.map((children, id) => (
        <div key={id} style={ count === id ? {transform: 'translateX(0px)'} : count === id + 1 ? {transform: 'translateX(950px)'} : count > id + 1 ? {transform: 'translateX(-950px)'} : {transform: 'translateX(-950px)'}} className={`slide_test ${
            count === id && 'visible_test'}`}>{children}</div>
        ))}
      </div>
      <div className='btns'>
        <button className='prev' onClick={() => handleClick('prev')}></button>
        <button className='main' onClick={() => handleClick('main')}></button>
        <button className='next' onClick={() => handleClick('next')}></button>
      </div>
    </div>
  );
}

