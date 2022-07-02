import Link from "next/link";
import BlogLink from "./blog-link";
import Style from "./style.module.css";
import TextLink from "./text-link";

const NavBar = () => {
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
                <a className="text-main-blue font-medium text-xl">yasser.blog</a>
              </div>
            </Link>
          </div>
          {/* right */}

          <div className={Style.textLinks + " " + "felx  space-x-4"}>
            <TextLink text='Work' />
            <TextLink text='About' />
            <TextLink text='Services' />
            <TextLink text='Contact' />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
