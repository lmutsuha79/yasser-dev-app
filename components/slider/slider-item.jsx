import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.css";
import Link from "next/link";
import Image from "next/image";
import PostTag from "../posts/post-tag";

const SliderItem = ({ post, nextPost, prevPost, setVariantsMode, variantsNext, variantsPrev }) => {
  return (
    // <AnimatePresence>
    <div
      key={post}
      // exit={{ y:-100 }}
      className={"absolute top-0 left-0 space-y-4 sm:grid sm:grid-cols-2 sm:items-center space-x-6" + " "}
    >
      {/* post info */}
      <div className="space-y-2 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          {/* top post info tags + date */}
          {/* <PostTag title={"web"} />
            <PostTag title={"course"} /> */}
          {post.tags.map((tag) => (
            <PostTag key={tag} title={tag} />
          ))}

          {/* date */}

          <span
            exit={{ y: 100 }}
            key={post}
            className={"text-main-blue font-semibold text-sm" + " "}
          >
            {post.date}
          </span>
        </div>
        {/* post title */}
        <Link href={post.url}>
          <a className="font-bold text-main-blue dark:text-white text-xl block">
            {post.title}
          </a>
        </Link>
        {/* desc */}
        <p className="text-main-gray text-sm font-normal leading-6">
          {post.excerpt}
        </p>
      </div>
      {/* post img */}
      <div className="flex-1">
      
          <div
            className={`${styles.imageWrapper} max-w-[400px] max-h-[300px] sm:max-w-[470px] sm:max-h-[300px] overflow-hidden transform md:-translate-y-28`}
          >
            <Image
              src={post.img}
              width={1200}
              height={680}
              
              alt={post.title + " img"}
              objectFit="cover"
              objectPosition="center"
              draggable="false"
            />
          </div>
        

        {/* slider controller */}
        <div className={styles.controllerContainer}>
          <div
            className="border-main-blue dark:border-white hover:border-main-blue-hover dark:hover:border-nav-border-gray text-main-blue dark:text-white hover:text-main-blue-hover dark:hover:text-nav-border-gray"
            id="next_slide"
            onClick={() => {
              nextPost();
              setVariantsMode(variantsNext)
            }}
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </div>
          <div
            className="border-main-blue dark:border-white hover:border-main-blue-hover dark:hover:border-nav-border-gray text-main-blue dark:text-white hover:text-main-blue-hover dark:hover:text-nav-border-gray"
            id="prev_slide"
            onClick={() => {
              prevPost();
              setVariantsMode(variantsPrev)

            }}
          >
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
        </div>
      </div>
    </div>
    // </AnimatePresence>
  );
};

export default SliderItem;
