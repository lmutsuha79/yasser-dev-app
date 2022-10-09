import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Style from "./Style.module.css";
FontAwesomeIcon;
const Footer = () => {
  return (
    <footer className=" my-[50px] ">
      <div className="container">
        <div className="flex flex-col sm:flex-row gap-2 justify-between items-center border-t border-t-[#f4f6fb] pt-12">
          {/* icons */}
          <div className="flex items-center gap-6 text-main-blue text-xl transition-colors">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/khelil.yasserdjameledine"
              className={Style.iconItem}
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            {/* <a  target="_blank"
              rel="noreferrer" href="#" className={Style.iconItem}>
              <FontAwesomeIcon icon={faTwitter} />
            </a> */}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/khelil__yasser/"
              className={Style.iconItem}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/mitsuha79/"
              className={Style.iconItem}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          {/* email */}
          <div className="cursor-pointer flex items-center gap-4 text-main-blue hover:text-main-blue-hover transition-colors">
            <div className="text-xl ">
              <FontAwesomeIcon icon={faPaperPlane} />
            </div>
            <a
              className="text-main-blue hover:text-main-blue-hover transition-colors font-medium"
              href="mailto:khelilyasser79@gmail.com"
            >
              khelilyasser79@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
