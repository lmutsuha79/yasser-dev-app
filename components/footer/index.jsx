import Link from "next/link";
import style from "./style.module.css";
import SocialLink from "./social-link";
import FooterTag from "./footer-tag";
import FooterTitle from "./footer-title";
import {
  faLinkedin,
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
        <div
          className={`${style.gridContent} grid sm:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4`}
        >
          <div>
            <FooterTitle title={"About"} />
            <p className="text-nav-border-gray">
              I hope, through this blog, to share with others my long journey
              revolving around computer science and self-development, and to
              inspire those who are interested.
            </p>
          </div>
          <div>
            <FooterTitle title={"Quick links"} />
            <div
              className={`${style.footerLinksContainer} flex flex-col text-nav-border-gray`}
            >
              <Link href={"/about"}>about me</Link>
              <Link href={"/privacy-policy"}>Privacy & Policy</Link>
              <Link href={"/terms-of-use"}>Terms of use</Link>
              <Link href={"/rss/feed.xml"}>RSS FEED</Link>
              <Link href={"/sitemap.xml"}>site-map</Link>
            </div>
          </div>
          <div>
            <FooterTitle title={"Tags"} />
            <div className="flex flex-wrap justify-center gap-2">
              <FooterTag tagTitle={"react"} />
              <FooterTag tagTitle={"web"} />
              <FooterTag tagTitle={"freelance"} />
              <FooterTag tagTitle={"javaScript"} />
            </div>
          </div>
          <div>
            <FooterTitle title={"Follow me on"} />

            <div className="flex justify-center space-x-2">
              <SocialLink
                label={"linkedin profile"}
                icon={faLinkedin}
                link="https://www.linkedin.com/in/mitsuha79/"
              />
              <SocialLink
                label={"twitter profile"}
                icon={faTwitter}
                link="https://twitter.com/YasserKhelil"
              />
              <SocialLink
                label={"instagram profile"}
                icon={faInstagram}
                link="https://www.instagram.com/khelil__yasser/"
              />
              <SocialLink
                label={"facebook profile"}
                icon={faFacebook}
                link="https://www.facebook.com/khelil.yasserdjameledine/"
              />
            </div>
          </div>
        </div>
        <div className={style.footerLine}></div>

        {/* bottom footer */}
        <div className="text-sm text-nav-border-gray font-light text-center ">
          <span className="">Yasser-Mitsuha-Blog - Design and code by:</span>
          <Link href="/about">
            <a className="text-white font-bold "> Me</a>
          </Link>
          <div>© 2022-present Yasser Mitsuha. All Rights Reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
