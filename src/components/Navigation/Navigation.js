import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import { Typography } from '../Typography';
import './Navigation.scss';

export const Navigation = (props) => {
  const {
    className = '',
    direction = 'horizontal',
    color = 'black',
    variant,
  } = props;
  // TODO: use useRef for nav items - DONE!
  
  const navItemsRef = useRef([
    { item: 'Home', hook: '#heroSection' },
    { item: 'About Us', hook: '#aboutUs' },
    { item: 'Our Work', hook: '#ourWork' },
    { item: 'Clients', hook: '#clients' },
    { item: 'Our Blog', hook: '#ourBlog' },
    { item: 'Contact Us', hook: '#contactUs' },
  ]);

  return (
    // TODO: Use nav tag - DONE!
    <nav  className={`navigation ${direction} ${className}`}>
      {navItemsRef.current.map(({ item, hook }) => (
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
