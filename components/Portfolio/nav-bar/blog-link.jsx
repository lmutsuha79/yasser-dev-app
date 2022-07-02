import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog as blogIcon } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket as arrowIcon } from "@fortawesome/free-solid-svg-icons";
import Style from "./style.module.css"
const BlogLink = () => {
  return (
    <div className={`${Style.icons} translate-y-[25%] transform  transition-transform`}>
      <div className="grid place-content-center text-main-blue text-2xl rounded-full w-[50px] h-[50px] overflow-hidden">
        <FontAwesomeIcon icon={blogIcon} />
      </div>
      <div className="grid place-content-center text-main-blue text-2xl rounded-full w-[50px] h-[50px] overflow-hidden">
        <FontAwesomeIcon icon={arrowIcon} />
      </div>
    </div>
  );
};

export default BlogLink;
