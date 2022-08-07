import Image from "next/image";
import profileImg from "../../public/portfolio/profile.png"
import BubbleButton from "./bubble-button";
import UnderLine from "./Under-line";
import WavesEffect from "./waves-effect";
const HeroSection = () => {
  return (
    <section className="pt-8 sm:pt-16 h-[calc(100vh-100px)] relative"
      style={{
        background:
          "linear-gradient(0deg, rgba(153,201,205,0.5) 0%, rgba(255,255,255,1) 70%)",
      }}
    >
            <WavesEffect />

      <div className=" grid place-content-center">
        <div className="container space-y-4 text-center">
          {/* img */}
          <div className="bg-[#eafafa] w-[150px] mx-auto overflow-hidden rounded-full">
            <Image
              src={profileImg}
              placeholder="blur"
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
              <UnderLine imgName={"green_white.svg"}>Business </UnderLine>
              to the Next Level
            </h2>
            <p className="text-lg font-medium">
              a <span className="text-xl font-bold">Web Developer</span> and{" "}
              <span className="text-xl font-bold">Software Engineer</span> in
              DZ. I specialize in front end development and Responsive Web
              Design
            </p>
            {/* butts */}
            <div className="flex justify-center">
            {/* <BubbleButton active={true} url={"#"} text={"Connect With Me"} /> */}
            <BubbleButton url={"/cv.pdf"} text={"get my cvs?"} />


            </div>
          </div>
        </div>
      </div>
      {/* <!--Waves Container--> */}
      {/* <!--Waves end--> */}
    </section>
  );
};

export default HeroSection;
