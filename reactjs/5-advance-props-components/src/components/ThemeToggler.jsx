import { createContext, useState } from "react";

const ThemeContext = createContext();

// ThemeContext provider component: in this component, we manage the theme state and provide it to children components
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const value = { theme, toggleTheme, isDark: theme === "dark" }; // value to be provided to consuming components
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

function ThemeToggler() {
  return <div>ThemeToggler</div>;
}

export default ThemeToggler;
