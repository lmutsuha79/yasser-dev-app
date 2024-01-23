import brands from "../../../data/brands";
import AnimatedSectionOnScroll from "../AnimatedSectionOnScroll";
import SectionTitle from "../section-title";
import UnderLine from "../Under-line";
import BrandContainer from "./brandContainer";

const Brands = () => {
  return (
    <>
      <AnimatedSectionOnScroll>
        <section id="brands" className="mt-[60px] sm:mt-[120px]">
          <div className="container">
            <div className="text-center">
              <SectionTitle>
                <UnderLine imgName={"orange.svg"}>Brands</UnderLine>
              </SectionTitle>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 justify-center items-center gap-8">
                {brands.map((brand, index) => (
                  <BrandContainer
                    key={index}
                    img={brand.img}
                    link={brand.link}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSectionOnScroll>
    </>
  );
};

export default Brands;
