import './Button.scss';

export const Button = (props) => {
  const { children, variant, color } = props;

  return (
    <button type="button" className={`btn ${variant} ${color}`}>
      {children}
    </button>
  );
};

// {
//   children,
//   variant = 'body1',
//   component = `span`,
//   color = 'black',
//   className = '',
// }
