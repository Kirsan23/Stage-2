import { string } from '../../utils/string';
import './Highlighter.scss';

const getExp = string;

export const Highlighter = (props) => {
  const { heading, highlight, component = 'h2', className = 'highlighter', color = 'black'} = props;
  // Can we reduce numbers of usage getExp function? Do we need to use it for every title?
  const parts = heading.split(new RegExp(`(${getExp(highlight)})`, 'gi'));
  const Tag = component;

  return (
    <Tag className={`${className}`}>
      {parts.map((part, i) => (
        <span
          key={i}
          className={`highlighter ${component} ${part.toLowerCase() === highlight.toLowerCase() ? 'orange' : color === 'white' ? 'white' : ''}`}
        >
          {part}
        </span>
      ))}
    </Tag>
  );
};
