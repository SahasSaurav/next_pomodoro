import { useEffect } from "react";
import ThemeProvider from "../context/ThemeContext";
import TimerProvider from "../context/TimerContext";
import "../styles/tailwind.css";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js", { scope: "/" })
          .then((reg) => {
            console.log(
              `Service Worker registration successful with scope: ${reg.scope}. `
            );
          })
          .catch((err) => {
            console.log(`Service Worker registration failed:\n $err} `);
          });
      });
    }
  }, []);

  return (
    <ThemeProvider>
      <TimerProvider>
        <Component {...pageProps} />
      </TimerProvider>
    </ThemeProvider>
  );
};

export default MyApp;
