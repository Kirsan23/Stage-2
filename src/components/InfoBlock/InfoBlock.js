import './InfoBlock.scss';
import { Highlighter } from '../Highlighter/Highlighter';
import { Button } from '../Button';

export const InfoBlock = (props) => {
  const {
    title,
    heading,
    highlight,
    component = 'h2',
    className,
    variant,
    button,
    children,
  } = props;

  return (
    <div className={`${className ? className : 'infoBlock'}`}>
      {title && <h6 className='infoBlock-title'>{title}</h6>}
      <Highlighter
        className='infoBlock-highlighter'
        heading={heading}
        highlight={highlight}
        component={component}
        variant={variant}
      />
      {children && children}
      {button !== 'none' && <Button />}
    </div>
  );
};
