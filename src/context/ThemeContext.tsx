import { createContext, useReducer } from "react";
import themeReducer from "@reducer/themeReducer";

import type { ChildrenProps, Theme, ThemeContextType } from "@state/themeType";

const initialState: Theme = {
	accentColor: "--acent-coral",
	accentFont: "--font-kumbh-sans",
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider: React.FC<ChildrenProps> = ({ children }) => {
	const [themeState, themeDispatch] = useReducer(themeReducer, initialState);

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
