import HeroSection from "./hero-section";
import NavBar from "./nav-bar";
import Resume from "./resume";
import Services from "./sercices";
import WorksDone from "./works-done";
import ClientsSlider from "./clients-slider"
const Portfolio = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      {/* <HeroSection /> */}
      {/* <Services /> */}
      <Resume />
      <WorksDone />
      <ClientsSlider/>
      {/* <div className="mt-[600px]"></div> */}
    </>
  );
};

export default Portfolio;
