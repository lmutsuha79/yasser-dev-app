import SectionTitle from "../section-title";
import UnderLine from "../Under-line";
import Slider from "./slider";
import { motion } from "framer-motion";
import AnimatedSectionOnScroll from "../AnimatedSectionOnScroll";
// import { itemVariant, jijivariant } from "../onScrollSectionAnimation";

const ClientsSlider = () => {
  return (
    <AnimatedSectionOnScroll>
      <section className="mt-[100px]">
        <div className="container">
          <SectionTitle>
            Trusted by brands all over{" "}
            <UnderLine imgName={"green_white.svg"}>the world</UnderLine>
          </SectionTitle>
          <Slider />
        </div>
      </section>
    </AnimatedSectionOnScroll>
  );
};

export default ClientsSlider;
