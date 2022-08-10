import Link from "next/link";
import { useState } from "react";
import Style from "./style.module.css";

const Item = ({ title, desc, imgName, link }) => {
  const [hoverStatus, setHoverStatus] = useState(false);
  return (
    <div>
      <Link href={link} passHref>
        <div
        
          className={
            Style.item +
            " " +
            "show_item flex flex-col cursor-pointer rounded-md overflow-hidden shadow-md"
          }
        >
          {/* img container */}
          <div className="overflow-hidden">
            {/* img div */}
            <div
              className={
                Style.theImg +
                " " +
                " transform transition-transform duration-700 min-h-[420px] bg-cover bg-no-repeat bg-center"
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
              <p className="text-main-blue font-normal text-base">{desc}</p>
            </div>
            {/* effect layer */}
            <div className="absolute  top-0 left-0 w-full h-full">
              {/* effect here */}
              {/* <BubbleLayer isHover={hoverStatus} /> */}
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
        </div>
      </Link>
    </div>
  );
};

export default Item;
