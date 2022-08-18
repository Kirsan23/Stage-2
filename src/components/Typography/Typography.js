import React from 'react';
import PropTypes from 'prop-types';
import './Typography.scss';

export const Typography = (props) => {
  const {
    children,
    variant = 'body1',
    component = `span`,
    color = 'black',
    className,
  } = props;
  const Tag = component;

  return (
    <Tag className={`typography ${variant} ${color} ${className}`}>
      {children}
    </Tag>
  );
};

Typography.propTypes = {
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'body1',
    'body2',
    'subtitle1',
    'subtitle2',
  ]),
  component: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'span',
    'p',
    'div',
  ]),
  color: PropTypes.oneOf(['orange', 'black']),
  className: PropTypes.string,
};
