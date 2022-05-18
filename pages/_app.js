import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "../styles/globals.css";
import React from "react";
import { useState } from "react";
export const ThemeContext = React.createContext("light");

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((current) => (current == "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={[theme,toggleTheme]}>
      <div className={theme}>
      <Component {...pageProps} />
      </div>
    </ThemeContext.Provider>
  );
}

export default MyApp;
