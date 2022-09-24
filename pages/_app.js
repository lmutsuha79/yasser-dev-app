import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "../styles/globals.css";
import React from "react";
import { useState, useEffect } from "react";
import { UseDark, changetheme } from "../util/UseDark";
import { UseSystemTheme } from "../util/UseSystemTheme";

export const ThemeContext = React.createContext("false");

function MyApp({ Component, pageProps }) {
  const [mounted,isMounted] = useState(false)
  const [isOn, setIsOn] = useState();

  useEffect(() => {
    // initialize the theme
    // trying to get the theme saved in the local storage
    let isDark = localStorage.getItem("isDark");

    // if no theme saved in local storage
    if (isDark === null) {
      // get the theme of device
      // isDark = UseSystemTheme() === "dark" ? "true" : "false";
      //
      isDark = "true";
    }
    localStorage.setItem("isDark", isDark);
    setIsOn(isDark); // stored value
    changetheme(1).then(() => isMounted(() => true));
  }, []);

  return mounted ? (
    <ThemeContext.Provider value={[isOn, setIsOn, changetheme]}>
      {/* <main> */}
      <div className="h-full w-full">
        <Component {...pageProps} />
      </div>
      {/* </main> */}
    </ThemeContext.Provider>
  ) : '<div>?? probleme with mounted state</div>';
  
}

export default MyApp;
