import React, { createContext, useState } from 'react';

// createContext needs for initial values - 1 parameter
const DarkModeContext = createContext();

// Maybe to rename to ThemeProvider?
// What if there will be several themes?
function DarkModeProvider(props) {
  // Boolean can handle 2 themes. How to handle more than 2 themes?
  // What you think if to use 'light' & 'dark' strings instead of boolean?
  const [darkMode, setDarkMode] = useState(false);

  // Maybe we can use useCallback from React here?
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      {/* Why do you need additional div above?  */}
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {/* Use destructuring at component start - const { children } = props  */}
        {props.children}
      </DarkModeContext.Provider>
    </div>
  );
}

// Please add PropTypes to define which props you can pass here

export { DarkModeContext, DarkModeProvider };
