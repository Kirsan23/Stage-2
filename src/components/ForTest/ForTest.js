import { Button } from '../Button';
import './ForTest.scss';

// export const ForTest = (props) => {
//   const { title, heading, children, paragraph, component = 'h2' } = props;
//   const Tag = component;
//   return (
//     <div>
//       <h6>{title}</h6>
//       <Tag>{heading}</Tag>
//       <p>{paragraph}</p>
//       <Button />
//     </div>
//   );
// };

export const ForTest = (props) => {
  const { heading, highlight, component = 'h2' } = props;
  const parts = heading.split(new RegExp(`(${highlight})`, 'gi'));
  const Tag = component;
  return <Tag className='ForTest'> { parts.map((part, i) => 
      <span key={i} style={part.toLowerCase() === highlight.toLowerCase() ? { color: '#FF5300' } : {} }>
          { part }
      </span>)
  } </Tag>;
}