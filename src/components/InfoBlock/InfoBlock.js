import './InfoBlock.scss';
import { Highlighter } from '../Highlighter/Highlighter';
import { Button } from '../Button';

export const InfoBlock = (props) => {
  const { title, heading, highlight, component = 'h2', children } = props;

  return (
    <div className='info-block'>
      {title && <h6 className='info-block-title'>{title}</h6>}
      <Highlighter
        clsName='info-block-highlighter'
        heading={heading}
        highlight={highlight}
        component={component}
      />
      <p className='info-block-paragraph'>{children}</p>
      <Button />
    </div>
  );
};
