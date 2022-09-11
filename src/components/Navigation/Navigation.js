import PropTypes from 'prop-types';
import { Typography } from '../Typography';
import './Navigation.scss';

export const Navigation = (props) => {
  const {
    className = '',
    direction = 'horizontal',
    color = 'black',
    component, // TODO: remove unused props
    variant,
  } = props;
  // TODO: use useRef for nav items
  const navItems = [
    { id: 1, item: 'Home', hook: '#heroSection' },
    { id: 2, item: 'About Us', hook: '#aboutUs' },
    { id: 3, item: 'Our Work', hook: '#ourWork' },
    { id: 4, item: 'Clients', hook: '#clients' },
    { id: 5, item: 'Our Blog', hook: '#ourBlog' },
    { id: 6, item: 'Contact Us', hook: '#contactUs' },
  ];

  return (
    // TODO: Use nav tag
    <div className={`navigation ${direction} ${className}`}>
      {navItems.map(({ id, item, hook }) => (
        <a key={id} href={hook} className={`navigation_item ${direction}`}>
          <Typography component={component} variant={variant} color={color}>
            {item}
          </Typography>
        </a>
      ))}
    </div>
  );
};

Navigation.propTypes = {
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  component: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'p']),
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  color: PropTypes.oneOf(['black', 'white']),
  className: PropTypes.string,
};
