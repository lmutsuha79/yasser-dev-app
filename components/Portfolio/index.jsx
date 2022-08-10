import HeroSection from "./hero-section";
import NavBar from "./nav-bar";
import Resume from "./resume";
import Services from "./sercices";
import WorksDone from "./works-done";
import ClientsSlider from "./clients-slider"
import AskMe from "./ask-me";
import TakeAction from "./take-action";
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
      <AskMe />
      <TakeAction />
      <div className="mt-[100px]"></div>
    </>
  );
};

export default Portfolio;
