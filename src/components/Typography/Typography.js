import React from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { DarkModeContext } from '../../components/Context';
import './Typography.scss';

export const Typography = (props) => {
  const { darkMode } = useContext(DarkModeContext);
  const { children, variant, component = `span`, color, className } = props;
  const Tag = component;

  return (
    <Tag className={`typography ${variant || ''} ${(color !== 'gray' && darkMode) ? 'white' : (color || '')} ${className || ''}`}>
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
    'p',
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
  color: PropTypes.oneOf(['orange', 'black', 'gray', 'white']),
  className: PropTypes.string,
};
