import TextLink from "./text-link";
import Style from "./style.module.css";
import Link from "next/link";
import BubbleButton from "../bubble-button";

const NavLinks = () => {
  return (
    <div
      className={
        Style.textLinks + " " + "hidden sm:flex items-center  space-x-4"
      }
    >
      <TextLink text="Work" />
      <TextLink text="About" />
      <TextLink text="Services" />
      {/* <TextLink text='Contact' /> */}
      <Link href={'#'}>
        <div className="bg-white text-main-blue border border-main-blue hover:bg-main-blue hover:text-white  transition-colors font-medium text-lg cursor-pointer px-4 py-1 rounded-md">
          Contact
        </div>
      </Link>
      
    </div>
  );
};

export default NavLinks;
