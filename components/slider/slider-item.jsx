import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.css";
import Link from "next/link";
import Image from "next/image";
import PostTag from "../posts/post-tag";
const SliderItem = ({ post, setPostIndex, postLength }) => {
  return (
    <div className="space-y-8 sm:flex sm:items-center space-x-6">
      {/* post info */}
      <div className="space-y-4 flex-1">
        <div className="flex items-center space-x-2">
          {/* top post info tags + date */}
          {/* <PostTag title={"web"} />
            <PostTag title={"course"} /> */}
          {post.tags.map((tag) => (
            <PostTag key={tag} title={tag} />
          ))}

          {/* date */}
          <span className="text-main-blue font-semibold text-sm">
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
          className={`${styles.imageWrapper} overflow-hidden transform md:-translate-y-32`}
        >
          <Image
            src={post.img}
            width={1200}
            height={720}
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
              setPostIndex((curr) => {
                if (curr + 1 >= postLength) return 0;
                return ++curr;
              });
            }}
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </div>
          <div
            className="border-main-blue dark:border-white hover:border-main-blue-hover dark:hover:border-nav-border-gray text-main-blue dark:text-white hover:text-main-blue-hover dark:hover:text-nav-border-gray"
            id="prev_slide"
            onClick={() => {
              setPostIndex((curr) => {
                if (curr - 1 >= 0) return --curr;
                return postLength - 1;
              });
            }}
          >
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
