import './Button.scss';

export const Button = (props) => {
  const { children } = props;

  return (
    <button type="button" className="btn">
      {children}
    </button>
  );
};
