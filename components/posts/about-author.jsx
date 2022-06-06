import Image from "next/image";
import Link from "next/link";
import { TwitterFollowButton } from "react-twitter-embed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
const AboutAuthor = () => {
  return (
    <div className="overflow-clip bg-white shadow-sm px-2 py-8 hover:shadow-md transition-shadow shadow-main-blue/10 w-fit h-fit flex flex-col md:flex-row space-x-4 items-center max-w-[700px]">
      {/* img */}
      <div className=" w-[100px] h-[100px] border-8 border-main-blue-hover rounded-full  grid place-content-center">
        <div className="rounded-full w-[90px] h-[90px] overflow-hidden">
          <Image
            src="/profile.png"
            alt="khelil_yasser_profile"
            width="100%"
            height="100%"
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
            Khelil Yasser Djamel Eddine
          </h3>
          <div className="flex justify-center md:justify-start">
            <TwitterFollowButton screenName="YasserKhelil" />
          </div>
        </div>
        <p className="text-main-blue font-light">
            <FontAwesomeIcon icon={faQuoteLeft} className="text-main-blue-hover text-xl mr-2 transform -translate-y-2"/>

          Hi, I'm Yasser, a passionate web application developer from Algeria. I
          spend most of my time discovering and learning new technologies and
          implementing different projects. I also love to help others. That's
          why I decided to dedicate a large part of my time to helping startups,
          entrepreneurs, artists, business owners to build their apps and
          websites. To enhance their online presence. I also like to work in
          teams, for that, I dedicate a large part of my time participating in
          clubs events and open source projects, and recently I create a team
          known as <Link href={'/bool-gang'}><a className="text-main-blue-hover hover:text-main-blue transition-colors font-medium">Bool Gang</a></Link> to get involved and develop our skills together.
          <FontAwesomeIcon icon={faQuoteLeft} className="text-main-blue-hover text-xl ml-2 transform rotate-180 translate-y-2"/>

        </p>
      </div>
    </div>
  );
};

export default AboutAuthor;
