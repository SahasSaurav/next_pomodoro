import type { ReactNode } from "react";

export interface ChildrenProps {
	children: ReactNode;
}

export interface Theme {
	accentColor: string;
	accentFont: string;
}
export interface ThemeContextType {
	accentColor: string;
	accentFont: string;
	changeAccentColor: (color: string) => void;
	changeAccentFont: (font: string) => void;
}

export type ThemeActionType =
	| { type: "TOGGLE-ACCENT-COLOR"; payload: string }
	| { type: "TOGGLE-ACCENT-FONT"; payload: string };
