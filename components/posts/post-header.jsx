import PostTag from "./post-tag";
import Image from 'next/image'
const PostHeader = ({meta}) => {
  return (
    <div>
      <div className="space-y-2 mb-6">
        {/* top post data info container */}
        <h1 className=" text-xl md:text-3xl font-Architects_Daughter text-main-blue font-bold text-center px-[10%]">
          {meta.title}
        </h1>
        <div className="flex justify-center space-x-2 items-center ">
          <div className="flex space-x-1">
            {meta.tags.map((tag) => (
              <PostTag key={tag} title={tag} />
            ))}
          </div>
          <span className="text-sm text-main-gray font-medium">
            {meta.date}
          </span>
        </div>
        <p className="font-normal text-base text-main-blue text-center px-3 sm:px-[10%] lg:px-[20%]">
          {meta.intro}
        </p>
      </div>

      {/* Post Hero Img  */}
      <div className="text-center">
        <Image
          src={meta.img}
          width={760}
          height={350}
          alt={meta.title + " img"}
          objectFit="contain"
          draggable="false"
        />
      </div>
    </div>
  );
};

export default PostHeader;
