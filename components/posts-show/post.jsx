import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

const Post = ({post}) => {
  const { date, excerpt, img, tags, title, url } = post;

  return (
    <Link href={url}>
       <div className="cursor-pointer transition-all space-y-1 px-3 py-6 rounded-lg bg-white dark:bg-dark-bg-blue shadow-sm hover:shadow-md dark:shadow-md dark:shadow-main-blue-hover/10 dark:hover:shadow-main-blue-hover/30">
        {/* shadow-main-blue drop-shadow-sm hover:drop-shadow-lg */}
        <div className={styles.imgWrapper}>
          <Image
            src={img}
            width={1200}
            height={720}
            alt={title + "_img"}
            objectFit="fill"
            objectPosition="center"
          />
        </div>

        <ul className="flex flex-wrap text-main-gray font-normal text-xs sm:text-sm">
          {/* tags slug */}
          
          {tags.map((tag) =>
            tag == tags[tags.length - 1] ? (
              <li key={tag}>{tag}</li>
            ) : (
              <li key={tag}>{tag + ","}</li>
            )
          )}
         
        </ul>
        {/* title */}
          <h3 className="font-bold text-main-blue hover:text-main-blue-hover transition-colors dark:text-white text-base sm:text-lg block">
            {title}
          </h3>
        <p className="text-main-blue text-base ">
          {excerpt}
        </p>
        <div className="flex justify-between text-main-gray text-xs sm:text-sm font-normal">
          {/* views + date */}
          <div>
            {date}
            {/* <span>12</span>
            <span> hour ago</span> */}
          </div>
          <div>
            <span>180</span>
            <span> views</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Post;
