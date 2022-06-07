import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TableContent from "./table-content";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const MobileTableContents = ({ activeSection }) => {
  const [mbTableIsOpen, setMbTableIsOpen] = useState(false);
  return (
    <div
      onClick={(e) => setMbTableIsOpen((curr) => !curr)}
      className="sm:hidden overflow-hidden h-fit left-2 right-2 fixed bottom-0 z-50 drop-shadow-lg border-x border-t-2 border-main-blue-hover/80 transition-all  bg-white  rounded-lg px-4 "
    >
      <div className="h-[50px] cursor-pointer text-main-blue font-bold hover:text-main-blue-hover flex justify-between items-center">
        <span>TABLE OF CONTENTS</span>
        <div className={mbTableIsOpen ? 'transform rotate-180 ' : '0'}>
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
      </div>
      <div className="h-[1px] rounded-md bg-white"></div>
      <div
        className={
          mbTableIsOpen
            ? "transition-all h-[280px] ease-in"
            : "transition-all ease-out h-[0px]"
        }
      >
        <TableContent title="" active={activeSection} />
      </div>
    </div>
  );
};

export default MobileTableContents;
