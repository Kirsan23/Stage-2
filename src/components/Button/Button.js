import './Button.scss';

export const Button = (props) => {
  const { children = 'Contact Us', variant, color } = props;

  return (
    <button type='button' className={`btn ${variant} ${color}`}>
      {children}
    </button>
  );
};

// Describe PropTypes here please
