import React, { createContext, useState } from 'react';

// createContext needs for initial values - 1 parameter
const DarkModeContext = createContext();

// What if there will be several themes?
function ThemeProvider(props) {
  // Boolean can handle 2 themes. How to handle more than 2 themes?
  // What you think if to use 'light' & 'dark' strings instead of boolean?
  const [darkMode, setDarkMode] = useState(false);
  const { children } = props;

  // Maybe we can use useCallback from React here?
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

// Please add PropTypes to define which props you can pass here

export { DarkModeContext, ThemeProvider };
