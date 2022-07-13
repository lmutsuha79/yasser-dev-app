import Image from "next/image";
import BubbleButton from "./bubble-button";
import UnderLine from "./Under-line";
const HeroSection = () => {
  return (
    <section className="h-[calc(100vh-70px)] grid place-content-center">
      <div className="container space-y-4 text-center">
        {/* img */}
        <div className="bg-[#eafafa] w-[150px] mx-auto overflow-hidden rounded-full">
          <Image
            src={"/portfolio/profile.png"}
            alt="profile picture"
            width={550}
            height={550}
            objectPosition={"center"}
            objectFit="contain"
            sizes={"550"}
          />
        </div>
        {/* text content */}
        <div className="text-main-blue space-y-6 w-[min(100%,678px)] mx-auto">
          <h3 className=" font-medium text-xl">
            Hi, I&apos;m Yasser<span className="text-2xl">✌️</span>
          </h3>
          <h2 className="font-bold text-5xl sm:text-6xl capitalize">
            take your{" "}
            <UnderLine imgName={"green_white.svg"}>Business</UnderLine>
            to the Next Level
          </h2>
          <p className="text-lg font-medium">
            a <span className="text-xl font-bold">Web Developer</span> and{" "}
            <span className="text-xl font-bold">Software Engineer</span> in DZ.
            I specialize in front end development and Responsive Web Design
          </p>
          {/* <div className="bg-main-blue hover:bg-main-blue-hover transition-colors text-white font-medium text-xl w-fit h-fit px-8 py-4 m-auto rounded-r-full rounded-l-full cursor-pointer">
            Connect With Me
          </div> */}
          <BubbleButton url={"#"} text={"Connect With Me"} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
