import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
const SliderControler = ({ nextPost, prevPost }) => {
  return (
    <div className={styles.controllerContainer + " " + ""}>
      <div
        className="border-main-blue dark:border-white hover:border-main-blue-hover dark:hover:border-nav-border-gray text-main-blue dark:text-white hover:text-main-blue-hover dark:hover:text-nav-border-gray"
        id="next_slide"
        onClick={() => {
          nextPost();
        }}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
      <div
        className="border-main-blue dark:border-white hover:border-main-blue-hover dark:hover:border-nav-border-gray text-main-blue dark:text-white hover:text-main-blue-hover dark:hover:text-nav-border-gray"
        id="prev_slide"
        onClick={() => {
          prevPost();
        }}
      >
        <FontAwesomeIcon icon={faArrowDown} />
      </div>
    </div>
  );
};

export default SliderControler;
