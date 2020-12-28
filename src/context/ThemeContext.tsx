import { createContext, useReducer } from "react";
import themeReducer from "../reducer/themeReducer";

const initalState = {
  accent:getComputedStyle(document.documentElement).getPropertyValue('--accent-clr'),
  font:document.body.style.fontFamily,
};

const ThemeContext = createContext<null>(null);

const ThemeProvider = ({ children }) => {
  const [themeState, themeDispatch] = useReducer(themeReducer, initalState);

  return (
    <ThemeContext.Provider value={{ app: "hello" }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
