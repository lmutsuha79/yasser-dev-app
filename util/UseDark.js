import { useState, useContext } from "react";
import { ThemeContext } from "../pages/_app";



export async function changetheme(is_first_render) {
  const isDark = localStorage.getItem("isDark");
  const darkReaderOptions = { brightness: 100, contrast: 90, sepia: 10 };
  if (typeof window != "undefined") {
    const { enable, disable, setFetchMethod } = await import(
      "darkreader"
    );

    if (is_first_render) {
      if (isDark === "true") {
        setFetchMethod(window.fetch);
        enable(darkReaderOptions);
      } else if (isDark === "false") {
        disable();
      }
    } else {
      if (isDark === "true") {
        disable();
        localStorage.setItem("isDark", "false");
        // setIsDark("false");
      } else if (isDark === "false") {
        setFetchMethod(window.fetch);
        enable(darkReaderOptions);
        localStorage.setItem("isDark", "true");
        // setIsDark("true");
      }
    }
  }
}
export async function UseDark(){
  // const [isDark, setIsDark] = useState();

 
  console.log('start');
  
}