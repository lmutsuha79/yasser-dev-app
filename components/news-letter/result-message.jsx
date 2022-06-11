import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile, faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
const ResultMessage = ({ state, errorMsg, closeMessage, resultIsVisible }) => {
  return (
    <AnimatePresence>
      {resultIsVisible && (
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity:1}}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed z-50  top-0 left-0 w-screen h-screen  bg-main-blue/70 grid place-content-center "
        >
          
          <motion.div 
          initial={{y:200,opacity:0}}
          animate={{y:0,opacity:1}}
          exit={{y:-200, opacity:0}}
          transition={{duration: 0.3}}
           className="bg-white rounded-md w-[300px] h-[400px] grid place-content-center">
            <div className="text-main-blue text-7xl text-center">
              {state === "Error" ? (
                <div className="">
                  <FontAwesomeIcon icon={faFaceFrown} />
                  <p className="text-lg">{errorMsg}</p>
                </div>
              ) : (
                <div>
                  <FontAwesomeIcon icon={faFaceSmile} />
                  <p className="px-4 text-lg">Awesome, you&apos;ve been subscribed!</p>
                </div>
              )}
            </div>
            <div
              onClick={() => {
                closeMessage();
              }}
              className="mx-auto w-fit text-white bg-main-blue px-4 py-2 rounded-md hover:bg-main-blue-hover cursor-pointer "
            >
              close
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResultMessage;
