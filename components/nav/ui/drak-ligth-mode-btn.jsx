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
        <Image src={"/icons/sun.png"} width={25} height={25} />
      ) : (
        <Image src={"/icons/Moon.png"} width={25} height={25} />
      )}
    </div>
  );
};

export default DarkLigthModBtn;
