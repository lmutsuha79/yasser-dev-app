import Link from "next/link";
import Image from "next/image";
const PostContainer = ({post}) => {
  const { img, title, tags, excerpt, date, url } = post;
  return (
    <Link href={url}>
      <div className="cursor-pointer transition-all space-y-1 px-3 py-6 rounded-lg bg-white dark:bg-dark-bg-blue shadow-sm hover:shadow-md dark:shadow-md dark:shadow-main-blue-hover/10 dark:hover:shadow-main-blue-hover/30">
        <div className="rounded-lg overflow-hidden">
          {/* img cotainer */}

          <Image
            src={img}
            width="1200"
            height="720"
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
                tag == tags[tags.length - 1] ? <li key={tag}>{tag}</li> : <li key={tag}>{tag + ','}</li>
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
