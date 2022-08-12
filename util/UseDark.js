import { useState, useContext } from "react";
import { ThemeContext } from "../pages/_app";
// import { enable, disable, setFetchMethod} from "darkreader"



export async function changetheme(is_first_render) {
  
  const isDark = localStorage.getItem("isDark");
  const darkReaderOptions = { brightness: 100, contrast: 90, sepia: 10 };
  if (typeof window != "undefined") {
    const { enable, disable, setFetchMethod,exportGeneratedCSS  } = await import(
      "darkreader"
    );

    if (is_first_render) {
      if (isDark === "true") {
        console.log('set dark theme ')
        setFetchMethod(window.fetch);
        const css = await exportGeneratedCSS();
        console.log(css)
        enable(darkReaderOptions);
      } if (isDark === "false") {
        console.log('set light theme ')

        disable();
      }
      
    } 
    
    else {
      console.log('else')
      if (isDark === "true") {
        disable();
        localStorage.setItem("isDark", "false");
      } if (isDark === "false") {
        setFetchMethod(window.fetch);
        enable(darkReaderOptions);
        localStorage.setItem("isDark", "true");
      }
    }
  }
}
