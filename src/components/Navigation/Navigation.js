import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Typography } from '../Typography';
import './Navigation.scss';

export const Navigation = (props) => {
  const {
    className = '',
    direction = 'horizontal',
    color = 'black',
    variant,
  } = props;

  const navItemsRef = useRef([
    { item: 'Home', hook: 'http://localhost:3000/' },
    { item: 'About Us', hook: '#aboutUs' },
    { item: 'Our Work', hook: '#ourWork' },
    { item: 'Clients', hook: '#clients' },
    { item: 'Our Blog', hook: 'http://localhost:3000/blog-page/' },
    { item: 'Contact Us', hook: '#contactUs' },
  ]).current;

  return (
    <nav className={`navigation ${direction} ${className} `}>
      {navItemsRef.map(({ item, hook }) => (
        <a key={item} href={hook} className={`navigation_item ${direction}`}>
          <Typography variant={variant} color={color}>
            {item}
          </Typography>
        </a>
      ))}
    </nav>
  );
};

Navigation.propTypes = {
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  color: PropTypes.oneOf(['black', 'white']),
  className: PropTypes.string,
};
