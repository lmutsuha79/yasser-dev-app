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

const NavBar = () => {
  return (
    <>
      
      <nav className="p-4 sm:py-[15px] sm:px-[50px] bg-white">
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
    </>
  );
};

export default NavBar;
