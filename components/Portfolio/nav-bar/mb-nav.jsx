import TextLink from "./text-link";
import Style from "./style.module.css";
import { motion } from "framer-motion";

const MbNav = ({ mbActive }) => {
  return (
    <motion.nav 
    className=""
      // initial={false}
      animate={mbActive ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3, type: "spring" }}
    >
      <div className=" bg-main-blue/95   grid place-content-center  fixed top-0 left-0 z-50 w-screen h-screen ">
        <div className="bg-white rounded-md border-main-blue border-2 w-[min(90vw,250px)]">
          <div
            className={
              Style.textLinks +
              " " +
              "flex flex-col justify-center items-center space-y-4 py-10"
            }
          >
            <TextLink text="Work" />
            <TextLink text="About" />
            <TextLink text="Services" />
            <TextLink text="Contact" />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default MbNav;
