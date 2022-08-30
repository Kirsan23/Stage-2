import './InfoBlock.scss';
import { Highlighter } from '../Highlighter/Highlighter';
import { Button } from '../Button';

export const InfoBlock = (props) => {
  const {
    title,
    heading,
    highlight,
    component = 'h2',
    button,
    children,
  } = props;

  return (
    <div className='info-block'>
      {title && <h6 className='info-block-title'>{title}</h6>}
      <Highlighter
        className='info-block-highlighter'
        heading={heading}
        highlight={highlight}
        component={component}
      />
      {children && <p className='info-block-paragraph'>{children}</p>}
      {button !== 'none' && <Button />}
    </div>
  );
};
