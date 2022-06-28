import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const PostContainer = ({ post }) => {
  const { img, title, tags, excerpt, date, url } = post;
  return (
    <Link href={url}>
      <div className="cursor-pointer transition-all space-y-1 px-3 py-6 rounded-lg bg-white dark:bg-dark-bg-blue shadow-sm hover:shadow-md dark:shadow-md dark:shadow-main-blue-hover/10 dark:hover:shadow-main-blue-hover/30">
        <div className="relative rounded-lg overflow-hidden">
          {/* img cotainer */}
          <div className="h-full w-full grid place-content-center bg-black/60 opacity-0 hover:opacity-100 transition-opacity absolute z-50 top-0 left-0">
            <div className="w-fit h-fit rounded-full p-2 bg-white">
            <FontAwesomeIcon className="text-main-blue text-xl" icon={faEye} />

            </div>
          </div>
          <Image
            src={img}
            width="1200"
            height="720"
            sizes={1200}
            objectFit="fill"
            objectPosition="center"
            alt={`${title} img`}
            draggable="false"
          />
        </div>
        <div className="space-y-2">
          {/* text container*/}
          <div className="text-main-gray text-sm font-light flex justify-between">
            <ul className="flex flex-wrap h-[20px] overflow-y-hidden">
              {tags.map((tag) =>
                tag == tags[tags.length - 1] ? (
                  <li key={tag}>{tag}</li>
                ) : (
                  <li key={tag}>{tag + ","}</li>
                )
              )}
            </ul>
            <span>{date}</span>
          </div>

          <h3 className="text-main-blue hover:text-main-blue-hover transition-colors font-semibold text-lg">
            {title}
          </h3>
          <p className="text-main-gray text-base">{excerpt}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostContainer;
