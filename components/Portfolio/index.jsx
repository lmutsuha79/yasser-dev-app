import HeroSection from "./hero-section";
import NavBar from "./nav-bar";
import Resume from "./resume";
import Services from "./sercices";
import WorksDone from "./works-done";
import ClientsSlider from "./clients-slider";
import AskMe from "./ask-me";
import TakeAction from "./take-action";
import Footer from "./footer";
import ContactMe from "./contact-info";
const Portfolio = () => {

  return (
    <>
      <ContactMe/>

      <NavBar />
      <HeroSection />
      {/* <HeroSection /> */}
      {/* <Services /> */}
      <Resume />
      <WorksDone />
      <ClientsSlider />
      <AskMe />
      <TakeAction />
      <Footer />
    </>
  );
};

export default Portfolio;
