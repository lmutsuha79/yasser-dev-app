import TextLink from "./text-link";
import Style from "./style.module.css";
import Link from "next/link";
import BubbleButton from "../bubble-button";

import { ContactShowContext } from "..";
import { useContext } from "react";
const NavLinks = () => {
  const [closeContact,oppenContact,contactIsOn] = useContext(ContactShowContext);
  return (
    <div
      className={
        Style.textLinks + " " + "flex items-center gap-4"
      }
    >
      <div className="hidden sm:flex  gap-4">
      <TextLink text="Work" />
      <TextLink text="About" />
      <TextLink text="Services" />
      </div>
      {/* <TextLink text='Contact' /> */}
      
        <div onClick={oppenContact}
         className="bg-white text-main-blue border border-main-blue hover:bg-main-blue hover:text-white  transition-colors font-medium text-lg cursor-pointer px-4 py-1 rounded-md">
          Contact
        </div>
    
      
    </div>
  );
};

export default NavLinks;
