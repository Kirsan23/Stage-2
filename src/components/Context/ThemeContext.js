import React, { createContext, useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext(localStorage.getItem('theme'));
const THEMES = {
  light: 'light',
  dark: 'dark',
};
const setThemeInLocalStorage = (theme) => {
  localStorage.setItem('theme', theme);
};

function ThemeProvider(props) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const { children } = props;
  const toggleTheme = useCallback(() => {
    setTheme((prevState) =>
      prevState === THEMES.light ? THEMES.dark : THEMES.light
    );
  });

  useEffect(() => {
    setThemeInLocalStorage(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };

ThemeContext.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']),
};
