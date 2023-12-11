import { createContext, useCallback, useState } from "react";
import { isLightTheme } from "../utils";

export const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const value = {
    theme,
    setTheme: useCallback(() => {
      setTheme((prev) => (isLightTheme(prev) ? "dark" : "light"));
    }, []),
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
