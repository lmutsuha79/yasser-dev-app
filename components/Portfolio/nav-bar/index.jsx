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
    <nav className="bg-white mt-[20px]">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* left */}
          <div>
            <Link href="/blog" passHref>
              <div
                className={
                  Style.BlogLink +
                  " " +
                  "flex items-center cursor-pointer h-[50px] overflow-hidden"
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
            {/* mb nav icon */}
            {/* <div
              className="sm:hidden"
              onClick={() => {
                setMbActive((curr) => !curr);
              }}
            >
              <MbNav mbActive={mbActive} />
              <FontAwesomeIcon
                className="cursor-pointer text-main-blue hover:text-main-blue-hover transition-colors text-2xl "
                icon={faBars}
              />
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
