import Image from "next/image";
// import profileImg from "../../public/portfolio/profile.png";
import profileImg from "../../public/portfolio/profile2.png";

import BubbleButton from "./bubble-button";
import UnderLine from "./Under-line";
import WavesEffect from "./waves-effect";
import { motion } from "framer-motion";
import { heroVariant, itemVariant } from "./onScrollSectionAnimation";

const HeroSection = () => {
  return (
    <motion.section
      variants={heroVariant}
      initial="hidden"
      whileInView={"show"}
    >
      <div
        className="pt-8 sm:pt-16 h-[calc(100vh-100px)] relative"
        style={{
          background:
            "linear-gradient(0deg, rgba(153,201,205,0.5) 0%, rgba(255,255,255,1) 70%)",
        }}
      >
        <WavesEffect />

        <div className=" grid place-content-center">
          <div className="container  text-center">
            {/* img */}
            <motion.div variants={itemVariant}>
              <div className="bg-[#eafafa] w-[150px] mx-auto overflow-hidden rounded-full">
                <Image
                  draggable={false}
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
            </motion.div>

            {/* text content */}
            <div className="text-main-blue  w-[min(100%,678px)] mx-auto">
              <motion.div variants={itemVariant}>
                <h3 className=" font-medium text-xl">
                  Hi, I&apos;m Yasser<span className="text-2xl">✌️</span>
                </h3>
              </motion.div>
              <motion.h2
                variants={itemVariant}
                className="mb-2 font-bold text-5xl sm:text-6xl capitalize"
              >
                take your{" "}
                <UnderLine imgName={"green_white.svg"}>Business </UnderLine> To
                the Next Level
              </motion.h2>

              {/* <motion.p variants={itemVariant} className="text-lg ">
                a <span className="text-xl font-bold">Web Developer</span> based
                in DZ. I specialize in front end development and Responsive Web
                Design
              </motion.p> */}
              <motion.p variants={itemVariant} className="text-lg relative z-10">
                a passionate{" "}
                <span className="underline font-bold">Web Developer</span>, I
                have spent the past few years building top-notch websites and
                helping numerous businesses grow and enhance their online
                presence
              </motion.p>
              {/* butts */}
              <motion.div
                variants={itemVariant}
                className="flex justify-center"
              >
                {/* <BubbleButton active={true} url={"#"} text={"Connect With Me"} /> */}
                <BubbleButton url={"/resume"} text={"get my cvs?"} />
              </motion.div>
            </div>
          </div>
        </div>
        {/* <!--Waves Container--> */}
        {/* <!--Waves end--> */}
      </div>
    </motion.section>
  );
};

export default HeroSection;
