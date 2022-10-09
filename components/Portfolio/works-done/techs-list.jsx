import { AnimatePresence, motion } from "framer-motion";

const TechsList = ({ items, hoverStatus }) => {
  
  return (
    <AnimatePresence exitBeforeEnter>
      {hoverStatus && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ staggerChildren: 0.5, delayChildren: 0.5 }}
          className="space-y-2"
        >
          {items.map((item) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-white text-xs md:text-sm font-medium bg-main-blue rounded-xl px-4 py-2 "
              key={item}
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TechsList;
