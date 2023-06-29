import Link from "next/link";
import { useRef, useState } from "react";
import Style from "./style.module.css";
import TechsList from "./techs-list";
import { motion } from "framer-motion";
import { useEffect } from "react";
const Item = ({ title, desc, imgName, link, techs, hoverImg }) => {
  const bg_img_div_container_ref = useRef(null);

  const [hoverStatus, setHoverStatus] = useState(false);
  useEffect(() => {
    if (hoverImg && hoverStatus) {
      bg_img_div_container_ref.current.style.backgroundImage = `url("/portfolio/works/${hoverImg}")`;
    } else {
      bg_img_div_container_ref.current.style.backgroundImage = `url("/portfolio/works/${imgName}")`;
    }
  }, [hoverStatus, hoverImg, imgName]);
  return (
    <div>
      <a className="" href={link} target="_blanck">
        <motion.div
          onHoverStart={() => setHoverStatus(true)}
          onHoverEnd={() => setHoverStatus(false)}
          className={
            Style.item +
            " " +
            "relative show_item flex flex-col cursor-pointer rounded-md overflow-hidden shadow-md"
          }
        >
          {/* techs tags container */}
          <div className="absolute top-3 right-[-6px] z-10">
            {/* {hoverStatus && ( */}
            <TechsList hoverStatus={hoverStatus} items={techs} />
            {/* )} */}
          </div>

          {/* img container */}
          <div className="overflow-hidden">
            {/* img div */}

            <div
              ref={bg_img_div_container_ref}
              // onMouseOver={(e) =>
              //   !hoverImg
              //     ? ""
              //     : (e.target.style.backgroundImage = `url("/portfolio/works/${hoverImg}")`)
              // }
              // onMouseOut={(e) =>
              //   !hoverImg
              //     ? ""
              //     : (e.target.style.backgroundImage = `url("/portfolio/works/${imgName}")`)
              // }
              className={
                Style.theImg +
                " " +
                " transform transition-transform duration-700 min-h-[300px] bg-cover bg-no-repeat bg-top"
              }
              style={{ backgroundImage: `url("/portfolio/works/${imgName}")` }}
            ></div>
          </div>
          <div className={"" + " " + Style.itemText}>
            {/* text layer */}
            <div
              className={
                Style.txt + " " + "py-4 px-2 transition-colors relative z-10"
              }
            >
              <h2 className=" text-main-blue font-semibold text-2xl">
                {title}
              </h2>
              <p className="text-main-blue-hover font-normal text-base">
                {desc}
              </p>
            </div>
            {/* effect layer */}
            <div className="absolute  top-0 left-0 w-full h-full">
              {/* effect here */}
              <div className={"w-full h-full" + " " + Style.jiji}>
                <div className={Style.btn}>
                  <div className="w-full h-[200%] absolute top-0 left-0 z-[-1]">
                    <span className={Style.bullet}></span>
                    <span className={Style.bullet}></span>
                    <span className={Style.bullet}></span>
                    <span className={Style.bullet}></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </a>
    </div>
  );
};

export default Item;
