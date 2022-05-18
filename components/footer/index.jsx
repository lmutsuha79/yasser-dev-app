import Link from "next/link";
import style from "./style.module.css";
import FooterIcon from "./footer-icon";
import FooterTag from "./footer-tag";
import FooterTitle from "./footer-title";
import {
  faDiscord,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div className="bg-main-blue mt-8 py-4">
      
      <div className="container space-y-8 px-4">
        {/* top */}
        <span className="font-Architects_Daughter text-white text-2xl">
          Yasser Mitsuha *_*
        </span>
        <div className={style.footerLine}></div>

        {/* main */}
        <div className={`${style.gridContent} grid sm:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4`}>
          <div>
            <FooterTitle title={"About"} />
            <p className="text-nav-border-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
              suspendisse leo neque iaculis molestie sagittis maecenas aenean
              eget molestie sagittis.
            </p>
          </div>
          <div>
            <FooterTitle title={"Quick links"} />
            <div className={`${style.footerLinksContainer} flex flex-col text-nav-border-gray`}>
              <Link href={"/"}>about me</Link>
              <Link href={"/"}>contact me</Link>
              <Link href={"/"}>refund policy</Link>
              <Link href={"/"}>help & support</Link>
            </div>
          </div>
          <div>
            <FooterTitle title={"Tags"} />
            <ul className="flex flex-wrap justify-center gap-2">
              <FooterTag tagTitle={"web"} tagLink={"/web"} />
              <FooterTag tagTitle={"security"} tagLink={"/web"} />
              <FooterTag tagTitle={"freelance"} tagLink={"/web"} />
              <FooterTag tagTitle={"news"} tagLink={"/web"} />
              <FooterTag tagTitle={"self improvment"} tagLink={"/web"} />
            </ul>
          </div>
          <div>
            <FooterTitle title={"Follow us on"} />

            <ul className="flex justify-center space-x-2">
              <FooterIcon icon={faDiscord} link="/discord" />
              <FooterIcon icon={faTwitter} link="/twitter" />
              <FooterIcon icon={faInstagram} link="/instagram" />
              <FooterIcon icon={faFacebook} link="/facebook" />
            </ul>
          </div>
        </div>
        <div className={style.footerLine}></div>

        {/* bottom footer */}
        <div className="text-sm text-center ">
          <span className="text-nav-border-gray font-light">
            © 2022, Yasser-Blog - Design and code by
          </span>
          <Link href="/about">
            <a className="text-white"> Yasser_Mitsuha</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
