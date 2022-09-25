import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ContactItem = ({ text, link, icon }) => {
  return (
    <div>
      <a href={link}>
            <div className="group relative flex  items-center gap-2 text-white hover:text-gray-300 transition-colors">
                  <FontAwesomeIcon className="text-4xl " icon={icon} />
                  <div className=" font-medium">{text}</div>
            </div>
      </a>
    </div>
  );
};

export default ContactItem;
