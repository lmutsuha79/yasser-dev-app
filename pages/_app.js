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
  const [isOn, setIsOn] = useState();

  async function onDark() {
    const darkReaderOptions = { brightness: 100, contrast: 90, sepia: 10 };
    if (typeof window != "undefined") {
      const { enable, disable, setFetchMethod, exportGeneratedCSS } =
        await import("darkreader");
      setFetchMethod(window.fetch);
      enable({
        brightness: 100,
        contrast: 90,
        sepia: 10,
      });
    }
  }

  onDark();

  // useEffect(() => {
  // initialize the theme
  // let isDark = localStorage.getItem("isDark");
  // if (isDark === null) {
  // get the theme of device
  // isDark = UseSystemTheme() === "dark" ? "true" : "false";
  //
  //     isDark = "false";
  //   }
  //   localStorage.setItem("isDark", isDark);
  //   setIsOn(isDark); // stored value
  //   changetheme(1);
  // }, []);

  // <ThemeContext.Provider value={[isOn, setIsOn, changetheme]}>
  //     {/* <main> */}
  //     <div className="h-full w-full">
  //       <Component {...pageProps} />
  //     </div>
  //     {/* </main> */}
  //   </ThemeContext.Provider>
  return (
    <div className="h-full w-full">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
