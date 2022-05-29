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
  
  useEffect(() => {
    // initialize the theme
    let isDark = localStorage.getItem('isDark');
    if (isDark === null) {
      isDark = UseSystemTheme() === "dark" ? 'true' : 'false'
    } 
      localStorage.setItem("isDark", isDark);
      setIsOn(isDark); // stored value
      changetheme(1);

  }, []);


  
  return (
    <ThemeContext.Provider value={[isOn,setIsOn,changetheme]}>
      
      {/* <main> */}
        <div className="h-full w-full bg-white dark:bg-dark-bg-blue">
        <Component {...pageProps} />
        </div>
      {/* </main> */}
    </ThemeContext.Provider>
  );
}

export default MyApp;
