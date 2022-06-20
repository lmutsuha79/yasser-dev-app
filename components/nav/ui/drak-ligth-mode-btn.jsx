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

  
  return (
    <div
      onClick={() => {
        const prev_is_dark = localStorage.getItem('isDark');
        changetheme(0);
        prev_is_dark === 'true' ? setIsOn('false') : setIsOn('true')
        
        
      }}
    >
      {isOn === "true" ? (
        <img src="/icons/sun.webp" alt="btn" width='25px' height='25px'/>
      ) : (
        <img src="/icons/Moon.webp" alt="btn" width='25px' height='25px'/>
      )}
    </div>
  );
};

export default DarkLigthModBtn;
