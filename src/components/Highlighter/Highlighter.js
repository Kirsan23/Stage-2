import { string } from '../../utils/string';
import { useContext } from 'react';
import { DarkModeContext } from '../../components/Context';
import './Highlighter.scss';

const getExp = string;

export const Highlighter = (props) => {
  const { darkMode } = useContext(DarkModeContext);
  const {
    heading,
    highlight,
    component = 'h2',
    className = 'highlighter',
    color = '',
  } = props;
  // Can we reduce numbers of usage getExp function? Do we need to use it for every title? - Don't understand how to do it!
  const parts = heading.split(new RegExp(`(${getExp(highlight)})`, 'gi'));
  const Tag = component;

  return (
    <Tag className={`${className}`}>
      {parts.map((part, i) => (
        <span
          key={i}
          className={`highlighter ${component} ${
            (part.toLowerCase() === highlight.toLowerCase() && 'orange') ||
            ((color === 'white' || darkMode) && 'white')
          }`}
        >
          {part}
        </span>
      ))}
    </Tag>
  );
};
