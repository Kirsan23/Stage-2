import './Button.scss';

export const Button = (props) => {
  const { children = 'Contact Us', className } = props;

  return (
    <button type='button' className={`btn ${className}`}>
      {children}
    </button>
  );
};