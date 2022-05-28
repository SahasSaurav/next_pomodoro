import { Theme, ThemeActionType } from "@state/themeType";

const themeReducer = (state: Theme, action: ThemeActionType) => {
	const root = document.documentElement;

	const cyan = getComputedStyle(root).getPropertyValue("--accent_cyan");
	const coral = getComputedStyle(root).getPropertyValue("--accent_coral");
	const violet = getComputedStyle(root).getPropertyValue("--accent_violet");

	const kumbh = getComputedStyle(root).getPropertyValue("--font_kumbh_sans");
	const space = getComputedStyle(root).getPropertyValue("--font_space_mono");
	const roboto = getComputedStyle(root).getPropertyValue("--font_roboto_slab");

	let color, font;

	switch (action.type) {
		case "TOGGLE-ACCENT-COLOR":
			if (action.payload === "--accent_coral") {
				color = coral;
			} else if (action.payload === "--accent_cyan") {
				color = cyan;
			} else if (action.payload === "--accent_violet") {
				color = violet;
			} else {
				color = state.accentColor;
			}
			root.style.setProperty("--accent_clr", color);
			return { ...state, accentColor: action.payload };
		case "TOGGLE-ACCENT-FONT":
			if (action.payload === "--font_roboto_slab") {
				font = roboto;
			} else if (action.payload === "--font_space_mono") {
				font = space;
			} else if (action.payload === "--font_kumbh_sans") {
				font = kumbh;
			} else {
				font = state.accentColor;
			}
			root.style.setProperty("--accent_font", font);
			return { ...state, accentFont: action.payload };
		default:
			return state;
	}
};

export default themeReducer;
