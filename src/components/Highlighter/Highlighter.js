import './Highlighter.scss';

// Let's move this function to utils/string.js and to import it here
const getExp = (str) => {
  return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
};

export const Highlighter = (props) => {
  const { heading, highlight, component = 'h2', clsName } = props;
  // Can we reduce numbers of usage getExp function? Do we need to use it for every title?
  const parts = heading.split(new RegExp(`(${getExp(highlight)})`, 'gi'));
  const Tag = component;

  return (
    <Tag className={`${clsName}`}>
      {parts.map((part, i) => (
        <span
          key={i}
          className={
            // Do we need black subclass? Can we set black as default and to add orange when it's needed?

            // highlighter and component classes used in both cases/results. Can we reduce condition results and to add only color subclass?
            // What I mean - `highlighter ${component} ${part === highlight ? 'orange' : ''}`
            part.toLowerCase() === highlight.toLowerCase()
              ? `highlighter ${component} orange`
              : `highlighter ${component} black`
          }
        >
          {part}
        </span>
      ))}
      {/* Why do you need this extra spacing? Please remove it */}
    </Tag>
  );
};
