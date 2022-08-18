import React from 'react';
import './Heading.scss';

// export function Title(props) {
//   if (props.size === 'h1') {
//     return (
//       <div className='main-title-h1'>
//         <h1 className='main-title-title'>
//           <span className="black-text">{props.firstPart}</span>
//           <span className="orange-text"> {props.secondPart} </span>
//           <span className="black-text">{props.thirdPart}</span>
//         </h1>
//         <p className='main-title-p'>{props.titleP}</p>
//       </div>
//     );
//   } else {
//     return (
//       <div className='main-title'>
//         <h6 className='main-title-name'>{props.titleName}</h6>
//         <h2>
//           <span className="black-text">{props.firstPart}</span>
//           <span className="orange-text"> {props.secondPart} </span>
//           <span className="black-text">{props.thirdPart}</span>
//         </h2>
//         <p className='main-title-p'>{props.titleP}</p>
//       </div>
//     );
//   }
// }

export const Heading = (props) => {
  const { variant = "h1", children } = props;

  return <div className={`heading ${variant}`}>{children}</div>;
};
