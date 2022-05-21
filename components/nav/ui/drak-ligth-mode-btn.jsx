import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../../pages/_app";



const DarkLigthModBtn = () => {
  // const [isDark, setIsDark] = useState();
  const [isOn,setIsOn,changetheme] = useContext(ThemeContext);
 
  const toggleDark = () => {
    const dark = localStorage.getItem('isDark');
    if(dark === 'false'){
      return 'false';
    }
    else if(dark === 'true'){
      return 'true';
    }
    else{
      return 'error';
    }
  }
  
  // async function changetheme(is_first_render) {
  //   const darkReaderOptions = { brightness: 100, contrast: 90, sepia: 10 };
  //   if (typeof window != "undefined") {
  //     const { enable, disable, setFetchMethod } = await import(
  //       "darkreader"
  //     );

  //     const isDark = localStorage.getItem("isDark");
  //     if (is_first_render) {
  //       if (isDark === "true") {
  //         setFetchMethod(window.fetch);
  //         enable(darkReaderOptions);
  //       } else if (isDark === "false") {
  //         disable();
  //       }
  //     } else {
  //       if (isDark === "true") {
  //         disable();
  //         localStorage.setItem("isDark", "false");
  //         setIsDark("false");
  //       } else if (isDark === "false") {
  //         setFetchMethod(window.fetch);
  //         enable(darkReaderOptions);
  //         localStorage.setItem("isDark", "true");
  //         setIsDark("true");
  //       }
  //     }
  //   }
  // }

  // useEffect(() => {
  //   const storedValue = localStorage.getItem("isDark");
  //   if (storedValue === null) {
  //     localStorage.setItem("isDark", "false");
  //     setIsDark(storedValue); // stored value
  //   } else {
  //     changetheme(true);
  //     setIsDark(storedValue);
  //   }
  // }, []);
  
  return (
    <div
      onClick={() => {
        const prev_is_dark = localStorage.getItem('isDark');
        changetheme(0);
        prev_is_dark === 'true' ? setIsOn('false') : setIsOn('true')
        
        
      }}
    >
      {isOn === "true" ? (
        <Image src={"/icons/sun.png"} width={25} height={25} />
      ) : (
        <Image src={"/icons/Moon.png"} width={25} height={25} />
      )}
    </div>
  );
};

export default DarkLigthModBtn;
