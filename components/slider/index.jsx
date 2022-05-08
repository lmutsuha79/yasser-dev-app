import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.css";
import Link from "next/link";
import Image from "next/image";
const HeroSlider = ({ post_obj }) => {
  // const {title,desc,date,tags,img,link} = post_obj
  return (
    <div
      style={{ boxShadow: "0px 7px 29px rgba(48,63,84,0.2)" }}
      className="px-6 py-8 md:px-6 md:py-8 lg:p-12"
    >
      <div className="bg-white space-y-8 sm:flex sm:items-center space-x-6">
        {/* post info */}
        <div className="space-y-4 flex-1">
          <div className="flex space-x-2">
            {/* top post info tags + date */}
            <div className={styles.tag}>
              {/* tags span */}
              <span>web</span>
              <span>security</span>
            </div>
            <div className="flex space-x-1 text-main-blue font-semibold text-sm">
              {/* date */}
              <span>10 month</span>
              <span>ago</span>
            </div>
          </div>
          {/* post title */}
          <Link href={"/"}>
            <a className="font-bold text-main-blue text-xl block">
              What is jam stack a depth look in to it
            </a>
          </Link>
          {/* desc */}
          <p className="text-main-gray text-sm font-normal leading-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            inventore eveniet vero laboriosam dignissimos! Suscipit voluptas
            quae in sint repellendus eos placeat corrupti vitae neque. Fugit
            dolorem, minima neque reprehenderit, aliquam quas deserunt, est
            laborum debitis cupiditate necessitatibus eveniet. Voluptatem
            consectetur magni officia quasi, explicabo at accusantium non?
          </p>
        </div>
        {/* post img */}
        <div className="flex-1">
          <div
            className={`${styles.imageWrapper} overflow-hidden transform md:-translate-y-32`}
          >
            <Image
              src={"/posts_img/img.png"}
              width={1200}
              height={720}
              alt="bla bla"
              objectFit="cover"
              objectPosition="center"
            />
          </div>

          {/* slider controller */}
          <div className={styles.controllerContainer}>
            <div id="next_slide" onClick={() => {console.log("next")}}>
              <FontAwesomeIcon icon={faArrowUp} />
            </div>
            <div id="prev_slide">
              <FontAwesomeIcon icon={faArrowDown} />
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
