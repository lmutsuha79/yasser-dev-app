import Image from "next/image";
import Link from "next/link";
// import { TwitterFollowButton } from "react-twitter-embed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
const AboutAuthor = () => {
  return (
    <div className="overflow-clip bg-white shadow-sm px-2 py-8 hover:shadow-md transition-shadow shadow-main-blue/10 w-fit  h-fit flex flex-col md:flex-row space-x-4 items-center ">
      {/* img */}
      <div className=" w-[100px] h-[100px] border-8 border-main-blue-hover rounded-full  grid place-content-center">
        <div className="rounded-full w-[90px] h-[90px] overflow-hidden">
          <Image
            src="/profile.png"
            alt="khelil_yasser_profile"
            width="100%"
            height="100%"
            sizes="90"
            objectFit="cover"
            objectPosition="top"
            draggable="false"
          />
        </div>
      </div>
      {/* txt */}
      <div className="text-center md:text-left space-y-2">
        <div className="md:flex md:space-x-2 items-center">
          <h3 className="text-main-blue text-xl font-medium font-Architects_Daughter">
            About Author
          </h3>
          <div className="flex justify-center md:justify-start">
            {/* <TwitterFollowButton screenName="YasserKhelil" /> */}
          </div>
        </div>
        <p className="text-main-blue font-light">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="text-main-blue-hover text-xl mr-2 transform -translate-y-2"
          />
          Hi i&#39;m yasser a Software Engineer based in DZ. I hope through this
          blog to share with you guys my coding journey to inspire those who are
          interested.
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="text-main-blue-hover text-xl ml-2 transform rotate-180 translate-y-2"
          />
        </p>
      </div>
    </div>
  );
};

export default AboutAuthor;
