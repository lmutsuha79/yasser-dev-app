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
import AppInfo from "../../data/AppInfo";
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
              Hi i&#39;m yasser a Software Engineer based in DZ. I hope through this blog to share
              with you guys my coding journey to inspire those who are
              interested.
            </p>
          </div>
          <div>
            <FooterTitle title={"Quick links"} />
            <div className={`${style.footerLinksContainer} flex flex-col `}>
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
                link={AppInfo.linkedin}
              />
              <SocialLink
                label={"twitter profile"}
                icon={faTwitter}
                link={AppInfo.twitter}
              />
              <SocialLink
                label={"instagram profile"}
                icon={faInstagram}
                link={AppInfo.instagram}
              />
              <SocialLink
                label={"facebook profile"}
                icon={faFacebook}
                link={AppInfo.facebook}
              />
            </div>
          </div>
        </div>
        <div className={style.footerLine}></div>

        {/* bottom footer */}
        <div className="text-sm text-nav-border-gray font-light text-center ">
          <span className="">Yasser-Mitsuha-Blog - Design and code by:</span>
          <Link href="/">
            <a className="text-white font-bold "> Me</a>
          </Link>
          <div>© 2022-present Yasser Mitsuha. All Rights Reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
