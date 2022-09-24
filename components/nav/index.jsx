import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import ControleBtnsList from "./controle-btns-list";
import NavBtn from "./ui/btn-container";
import MenuBtn from "./ui/menu-btn";
import { useState } from "react";
import BtnContainer from "./ui/btn-container";
import Logo from "./logo";
import { useEffect } from "react";


const NavBar = () => {
  
  useEffect(() => {
    // to add y cursor
    document.querySelector('body').classList.remove('body_portfolio')
    document.querySelector('body').classList.add('body_blog');
    
  },[])
  return (
      <nav className="h-[70px] p-4 sm:py-[15px] sm:px-[50px] bg-main-blue dark:bg-main-blue fixed w-full top-0 z-[99] ">
        <div className="flex items-center justify-between">
          {/* the mb_nav btn on the left side */}
            <MenuBtn />
            {/* make it logotype = box to  change the style of the logo */}
            <Logo logoType={''}/>

          

          {/* btn contorl list 
            I make it a  list because in the futter I will add more btns
          */}
          <ControleBtnsList />
        </div>
      </nav>
   
  );
};

export default NavBar;
