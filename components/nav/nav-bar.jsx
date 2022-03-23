import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import NavBtns from "./nav-btns";
import NavBtn from "./ui/nav-btn";
import { useState } from "react";
const NavBar = ({pageTitle}) => {
      


      
  return (
    <>
      <nav className="bg-main-blue center_with_flex">
            <span className="text-white text-md font-bold">{pageTitle}</span>
      </nav>
      <nav className="h-[100px] py-[25px] px-[50px] bg-white">
        <div className="flex items-center justify-between">
          <NavBtn>
            <Image src={"/icons/nav_btn.svg"} width={25} height={25} />
          </NavBtn>
          {/* <div id="btn" className='cursor-pointer border border-nav-border-gray p-[5px] rounded-lg center_with_grid'>
                              <Image src={"/icons/nav_btn.svg"} width={25} height={25}/>
                        </div> */}
          {/* <Link href={'/blog'}><a className='font-bold text-sm sm:text-md text-main-blue'>The Blog</a></Link> */}
          <NavBtns />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
