import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import BlogLink from "./blog-link";
import MbNav from "./mb-nav";
import NavLinks from "./nav-links";
import Style from "./style.module.css";

const NavBar = () => {
  const [mbActive, setMbActive] = useState(false);
  return (
    <nav className="bg-white sticky top-0 z-[99] h-[50px] overflow-hidden shadow-sm ">
      <div className="container h-full">
        <div className="flex justify-between items-center h-full">
          {/* left */}
          <div>
            <Link href="/blog" passHref>
              <div
                className={
                  Style.BlogLink +
                  " " +
                  "flex items-center cursor-pointer h-full overflow-hidden"
                }
              >
                <BlogLink />
                <a className="text-main-blue font-medium text-xl">
                  yasser.blog
                </a>
              </div>
            </Link>
          </div>
          {/* right */}

          <div className="">
            <NavLinks />
          
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
