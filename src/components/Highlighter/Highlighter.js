import './Highlighter.scss';

const getExp = (str) => {
  return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
};

export const Highlighter = (props) => {
  const { heading, highlight, component = 'h2', clsName } = props;
  const parts = heading.split(new RegExp(`(${getExp(highlight)})`, 'gi'));

  const Tag = component;
  return (
    <Tag className={`${clsName}`}>
      {parts.map((part, i) => (
        <span
          key={i}
          className={
            part.toLowerCase() === highlight.toLowerCase()
              ? `highlighter ${component} orange`
              : `highlighter ${component} black`
          }
        >
          {part}
        </span>
      ))}{' '}
    </Tag>
  );
};
