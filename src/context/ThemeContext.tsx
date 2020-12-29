import { createContext, useReducer } from "react";
import themeReducer from "../reducer/themeReducer";

const initalState = {
  accentColor: "--acent-coral",
  accentFont: "--font-",
};

export const ThemeContext = createContext<null>(null);

const ThemeProvider = ({ children }) => {
  const [themeState, themeDispatch] = useReducer(themeReducer, initalState);

  const changeAccentColor = (color: string) => {
    themeDispatch({ type: "TOGGLE-ACCENT-COLOR", payload: color });
  };
  const changeAccentFont = (font: string) => {
    themeDispatch({ type: "TOGGLE-ACCENT-FONT", payload: font });
  };

  return (
    <ThemeContext.Provider
      value={{
        ...themeState,
        changeAccentColor,
        changeAccentFont,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
