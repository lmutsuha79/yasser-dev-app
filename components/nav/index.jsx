import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import ControleBtnsList from "./controle-btns-list";
import NavBtn from "./ui/btn-container";
import MenuBtn from "./ui/menu-btn";
import { useState } from "react";
import BtnContainer from "./ui/btn-container";

const NavBar = ({ pageTitle }) => {
  return (
    <>
      <nav className="bg-main-blue center_with_flex">
        <span className="text-white text-md font-bold">{pageTitle}</span>
      </nav>
      <nav className="h-[100px] py-[5px] px-[10px] sm:py-[25px] sm:px-[50px] bg-white">
        <div className="flex items-center justify-between">
          {/* the mb_nav btn on the left side */}
          <BtnContainer>
            <MenuBtn />
          </BtnContainer>

          {/* btn contorl list */}
          <ControleBtnsList />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
