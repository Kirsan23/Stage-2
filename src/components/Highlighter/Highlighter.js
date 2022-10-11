import { string } from '../../utils/string';
import { useContext } from 'react';
import { ThemeContext } from '../../components/Context';
import './Highlighter.scss';

const getExp = string;

export const Highlighter = (props) => {
  const { theme } = useContext(ThemeContext);
  const {
    heading,
    highlight,
    component = 'h2',
    className = 'highlighter',
    color = '',
  } = props;
  const parts = heading.split(new RegExp(`(${getExp(highlight)})`, 'gi'));
  const Tag = component;

  return (
    <Tag className={`${className}`}>
      {parts.map((part, i) => (
        <span
          key={i}
          className={`highlighter ${component} ${
            (part.toLowerCase() === highlight.toLowerCase() && 'orange') ||
            ((color === 'white' || theme === 'dark') && 'white')
          }`}
        >
          {part}
        </span>
      ))}
    </Tag>
  );
};
