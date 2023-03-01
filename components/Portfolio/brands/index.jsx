import AnimatedSectionOnScroll from "../AnimatedSectionOnScroll";
import SectionTitle from "../section-title";
import UnderLine from "../Under-line";
import BrandContainer from "./brandContainer";

const Brands = () => {
  return (
    <>
      <AnimatedSectionOnScroll>
        <section id="brands" className="mt-[60px]">
          <div className="container">
            <div className="text-center">
              <SectionTitle>
                <UnderLine imgName={"orange.svg"}>Brands</UnderLine>
              </SectionTitle>

              <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8">
                <BrandContainer img={"/portfolio/brands/magicoon.png"} />
                <BrandContainer img={"/portfolio/brands/likePro.png"} />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSectionOnScroll>
    </>
  );
};

export default Brands;
