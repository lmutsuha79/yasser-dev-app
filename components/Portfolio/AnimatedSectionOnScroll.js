import { MotionConfig } from "framer-motion";
import { motion } from "framer-motion";
import { jijivariant } from "./onScrollSectionAnimation";
const AnimatedSectionOnScroll = ({ children }) => {
  return <motion.div 
  variants={jijivariant}
  initial="hidden"
  whileInView={"show"}
  >{children}</motion.div>;
};

export default AnimatedSectionOnScroll;
