import './Typography.scss'

export const Typography = (props) => {
    const { children } = props;
  
    return <p className='typography'>{children}</p>;
  };