import ThemeProvider from "../context/ThemeContext";
import TimerProvider from "../context/TimerContext";
import "../styles/tailwind.css";


const MyApp=({ Component, pageProps })=> {
  return (
    <ThemeProvider>
      <TimerProvider>
        <Component {...pageProps} />
      </TimerProvider>
     </ThemeProvider>
  );
}

export default MyApp;
