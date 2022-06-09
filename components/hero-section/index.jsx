import HeroSlider from "../slider";
import { useState } from "react";

const HeroSection = ({ slidePosts }) => {
  const [appearHome,setAppearHome] = useState(true);
  return (
    <section className="mt-20 lg:w-[80%] xl:w-[70%] mx-auto">
      {/* <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3,delay:0.3}}> */}
       
        <HeroSlider posts={slidePosts} />

    </section>
  );
};

export default HeroSection;
