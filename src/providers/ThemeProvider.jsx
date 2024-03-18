import { createContext, useContext, useEffect, useState } from "react";

const defaultContext = {
  isDarkMode: false,
  toggleMode: () => {},
};

const ThemeContext = createContext(defaultContext);

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(defaultContext.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
        document.body.style.setProperty("--button-color", "#009999");
        document.body.style.setProperty("--button-hover-color", "#006666");
        document.body.style.setProperty("--text-color", "#ffffff");
        document.body.style.setProperty("--input-text-color", "#646669");
        document.body.style.setProperty("--correct-letter-color", "#eeeeee");
        document.body.style.setProperty("--wrong-letter-color", "#ff5050");
        document.body.style.setProperty("--background-color", "#222222");
      } else {
        document.body.style.setProperty("--button-color", "#008ae6");
        document.body.style.setProperty("--button-hover-color", "#006bb3");
        document.body.style.setProperty("--text-color", "#000000");
        document.body.style.setProperty("--input-text-color", "#4444");
        document.body.style.setProperty("--correct-letter-color", "#111111");
        document.body.style.setProperty("--wrong-letter-color", "#ca4754");
        document.body.style.setProperty("--background-color", "#dddddd");
      }
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
