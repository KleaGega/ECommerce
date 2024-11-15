import React, { useState, ReactNode, useEffect } from "react";
import ThemeContext from "../ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      window.localStorage.setItem("data-theme", newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("data-theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
