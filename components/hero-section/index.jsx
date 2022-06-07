import Image from "next/image";
import HeroSlider from "../slider";

const HeroSection = ({slidePosts}) => {
  return (
    <section className="mt-20 lg:w-[80%] xl:w-[70%] mx-auto">

      <HeroSlider posts={slidePosts}/>

    </section>
  );
};

export default HeroSection;
