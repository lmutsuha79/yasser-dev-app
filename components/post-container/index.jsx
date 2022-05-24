import Link from "next/link";
import Image from "next/image";
const PostContainer = ({ img, title, tags, exerpt, date, url }) => {
  return (
    <Link href={url}>
      <div className="cursor-pointer shadow-sm shadow-main-blue/10 px-3 py-6 hover:shadow-md transition">
        <div>
          {/* img cotainer */}

          <Image
            src={img}
            width="1200"
            height="720"
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
          <p className="text-main-gray text-base">{exerpt}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostContainer;
