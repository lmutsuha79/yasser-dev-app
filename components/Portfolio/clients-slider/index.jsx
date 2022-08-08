import SectionTitle from "../section-title";
import UnderLine from "../Under-line";
import Slider from "./slider";
const ClientsSlider = () => {
  return (
    <section className="mt-[100px]">
      <div className="container">
        <SectionTitle>
          Trusted by brands all over{" "}
          <UnderLine imgName={"green_white.svg"}>the world</UnderLine>
        </SectionTitle>
        <Slider />
      </div>
    </section>
  );
};

export default ClientsSlider;
