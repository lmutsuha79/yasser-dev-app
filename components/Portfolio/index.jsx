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
import { useState } from "react";
import React from "react";
import Brands from "./brands";
import Techs from "./techs";

export const ContactShowContext = React.createContext(false);

const Portfolio = () => {
  const [contactIsOn, setContactIsOn] = useState(false);
  const closeContact = () => {
    setContactIsOn(false);
    console.log("contact is false");
  };
  const oppenContact = () => {
    setContactIsOn(true);
    console.log("contact is true");
  };
  return (
    <>
      {contactIsOn && <ContactMe closeContact={closeContact} />}
      <ContactShowContext.Provider
        value={[closeContact, oppenContact, contactIsOn]}
      >
        <main className={contactIsOn ? "blur-sm" : ""}>
          <NavBar oppenContact={oppenContact} />

          <HeroSection />
          <Brands />
          <WorksDone numToShow={6} />
          <Techs />
          <ClientsSlider />
          {/* <Resume /> */}
          <AskMe />
          <TakeAction oppenContact={oppenContact} />
          <Footer />
        </main>
      </ContactShowContext.Provider>
    </>
  );
};

export default Portfolio;
