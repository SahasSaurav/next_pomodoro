import { createContext, useReducer } from "react";
import themeReducer from "../reducer/themeReducer";

const initalState = {
  accent:'coral',
  font:document.body.style.fontFamily,
};

const ThemeContext = createContext<null>(null);

const ThemeProvider = ({ children }) => {
  const [themeState, themeDispatch] = useReducer(themeReducer, initalState);

  return (
    <ThemeContext.Provider value={{...themeState  }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
