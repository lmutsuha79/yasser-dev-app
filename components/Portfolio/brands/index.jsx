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
                <BrandContainer
                  img={"/portfolio/brands/magicoon.png"}
                  link={"https://magicoon.com/"}
                />
                <BrandContainer
                  img={"/portfolio/brands/likePro.png"}
                  link={"https://likeproo.com/"}
                />
                <BrandContainer
                  img={"/portfolio/brands/feed_back_flow.png"}
                  link={"https://feedback-flow-l3.vercel.app/"}
                />
                <BrandContainer
                  img={"/portfolio/brands/jarShop.png"}
                  link={"https://jar-shop.com/"}
                />
                <BrandContainer
                  img={"/portfolio/brands/allo_khayii.jpg"}
                  link={
                    "https://www.facebook.com/profile.php?id=100092428299332"
                  }
                />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSectionOnScroll>
    </>
  );
};

export default Brands;
