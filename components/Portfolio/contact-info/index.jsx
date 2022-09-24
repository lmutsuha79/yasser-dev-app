import SectionTitle from "../section-title";
import UnderLine from "../Under-line";
import ContactItem from "./contact-item";
import { faFacebookMessenger, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faInbox } from "@fortawesome/free-solid-svg-icons";

const ContactMe = () => {
      return (
            <div className="bg-main-blue">
                  <SectionTitle>
                        <UnderLine imgName={"orange.svg"}><h2 className="text-white">Contact info</h2></UnderLine>
                  </SectionTitle>
                  <div>

                        <ContactItem  icon={faWhatsapp} link={"#"} />
                        <ContactItem  icon={faFacebookMessenger} link={"https://m.me/khelil.yasserdjameledine"} />
                        <ContactItem  icon={faEnvelope} link={"#"} />


                  </div>
            </div>
      );
}

export default ContactMe;