import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ContactItem = ({ text, link, icon }) => {
  return (
    <div>
      <a href={link}>
            <div className="flex items-center gap-2 ">
                  <FontAwesomeIcon className="text-4xl text-white" icon={icon} />
                  <span className="text-white font-medium">{text}</span>
            </div>
      </a>
    </div>
  );
};

export default ContactItem;
