import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "../styles/globals.css";
import React from "react";
import { useState, useEffect } from "react";
import { UseDark, changetheme } from "../util/UseDark";



export const ThemeContext = React.createContext("false");

function MyApp({ Component, pageProps }) {
  const [isOn, setIsOn] = useState();
  
  useEffect(() => {
    const isDark = localStorage.getItem('isDark');

    // initialize the theme
    if (isDark === null) {
      localStorage.setItem("isDark", "false");
      setIsOn("false"); // stored value
    } else {
      // 1 to intialize the theme stored in the localstorage
      changetheme(1);
      if(isDark === 'false'){
        setIsOn('false')
      }else if(isDark === 'true'){
        setIsOn('true')
      }else{
        setIsOn('error')
      }    }
  }, []);

  useEffect(() => {
    console.log('changed')
  },[isOn])
  
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
