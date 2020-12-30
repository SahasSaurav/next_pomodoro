export interface ChildrenProps {
  children: React.ReactNode;
}

export interface Theme {
  accentColor: string,
  accentFont: string,
}
export interface ThemeContextType {
  accentColor: String,
  accentFont: String,
  changeAccentColor: (color: string) => void,
  changeAccentFont: (font: string) => void,
}

export type ThemeActionType = | { type: 'TOGGLE-ACCENT-COLOR', payload: string } | { type: 'TOGGLE-ACCENT-FONT', payload: string }

