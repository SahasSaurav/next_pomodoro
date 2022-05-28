import ThemeProvider from "@context/ThemeContext";
import TimerProvider from "@context/TimerContext";

import type { AppProps } from "next/app";

import "@styles/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider>
			<TimerProvider>
				<Component {...pageProps} />
			</TimerProvider>
		</ThemeProvider>
	);
}

export default MyApp;
