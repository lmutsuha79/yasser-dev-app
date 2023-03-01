import Image from "next/image";
import AnimatedSectionOnScroll from "../AnimatedSectionOnScroll";
import BrandContainer from "../brands/brandContainer";
import SectionTitle from "../section-title";
import UnderLine from "../Under-line";
import Styles from "./style.module.css";
import TechItem from "./tech-item";
import { front_techs, back_techs } from "../../../data/techsData";
const Techs = () => {
  const techs = [...front_techs, ...back_techs];
  return (
    <>
      <AnimatedSectionOnScroll>
        <section id="brands" className="mt-[60px]">
          <div className="container">
            <div className="text-center">
              <SectionTitle>
                <UnderLine imgName={"orange.svg"}>technologies </UnderLine>
                {" " + "I love working with"}
              </SectionTitle>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center justify-center gap-4 ">
              {techs.map((item, index) => {
                return <TechItem img={item.img} key={index} />;
              })}
            </div>
          </div>
        </section>
      </AnimatedSectionOnScroll>
    </>
  );
};

export default Techs;
