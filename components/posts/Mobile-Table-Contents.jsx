import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TableContent from "./table-content";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";
const MobileTableContents = ({title, pathName,startHidden }) => {
  const [mbTableIsOpen, setMbTableIsOpen] = useState(false);
  return (
    
    <div
      onClick={(e) => setMbTableIsOpen((curr) => !curr)}
      className={startHidden+':hidden '+" overflow-hidden h-fit left-2 right-2 fixed  bottom-0 z-[99] drop-shadow-lg border-x border-t-2 border-main-blue-hover/80 transition-all  bg-white  rounded-lg px-4 "}
    >
      <dvi className='hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden'></dvi>
      <div className="h-[50px] cursor-pointer text-main-blue font-bold hover:text-main-blue-hover flex justify-between items-center">
        <span>{title ? title : "contents"}</span>
        <motion.div
          animate={mbTableIsOpen ? { rotate: 180 } : { rotate: 0 }}
          transition={{ duration: 0.2 }}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </motion.div>
      </div>
      <div className="h-[1px] rounded-md bg-white"></div>

      <motion.div
        initial={false}
        animate={
          mbTableIsOpen
            ? { height: 280, opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3,type:"spring" }}
      >
        <TableContent title={' '} pathName={pathName}/>
      </motion.div>
    </div>
  );
};

export default MobileTableContents;
