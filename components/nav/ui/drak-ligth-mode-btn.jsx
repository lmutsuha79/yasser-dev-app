import Image from "next/image";
import { ThemeContext } from "../../../pages/_app";
import { useContext } from "react";

const DarkLigthModBtn = () => {
  const theme = useContext(ThemeContext);


  return (
    <div
      onClick={() => {
        
        theme[1](); // call the function for toggling the theme
      }}
    >
      {theme[0] == 'dark' ? <Image src={"/icons/sun.png"} width={25} height={25} /> : <Image src={"/icons/Moon.png"} width={25} height={25} />}
      
    </div>
  );
};

export default DarkLigthModBtn;
