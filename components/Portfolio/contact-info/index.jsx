import SectionTitle from "../section-title";
import UnderLine from "../Under-line";
import ContactItem from "./contact-item";
import {
  faFacebookMessenger,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faInbox,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactMe = ({closeContact}) => {
  return (
    <div className="fixed top-0 left-0 z-[999] w-screen h-screen grid place-items-center  ">
      <div className="bg-main-blue/90 h-[600px] w-[95%] sm:w-[500px] rounded-lg grid place-content-start">
        <div onClick={closeContact} className="text-white cursor-pointer hover:text-gray-300 text-3xl text-right p-4"><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></div>
        <div className="text-center px-2 py-10 flex flex-col">
          <SectionTitle>
            <div className="space-y-2">
              <div>👋👋</div>
              <div className="text-white">{"I've been waiting for you"}</div>
            </div>
          </SectionTitle>
          <p className="mb-6 sm:px-10 text-white text-xl font-medium">
            feel free to contact us on any of this social media platform
          </p>
          <div className="flex flex-col justify-center gap-4">
            <ContactItem text={"+213 798257795"} icon={faWhatsapp} link={"#"} />
            <ContactItem
              text={"https://m.me/khelil.yasserdjameledine"}
              icon={faFacebookMessenger}
              link={"https://m.me/khelil.yasserdjameledine"}
            />
            <ContactItem
              text={"khelilyasser79@gmail.com"}
              icon={faEnvelope}
              link={"#"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
