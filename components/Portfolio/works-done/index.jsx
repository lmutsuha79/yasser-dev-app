import { motion } from "framer-motion";
import SectionTitle from "../section-title";
import UnderLine from "../Under-line";
import Item from "./item";
import AnimatedSectionOnScroll from "../AnimatedSectionOnScroll";
import worksData from "../../../data/worksDone";
import Link from "next/link";
import { useState } from "react";

const WorksDone = ({ numToShow }) => {
  const [num, setNum] = useState(numToShow);
  function toggleDisplayAll() {
    const btn = document.getElementById("toggleDiaplayAllWorksBtn");
    if (num === numToShow) {
      setNum(null);
      btn.textContent = "display less 👀";
    } else {
      setNum(numToShow);
      btn.textContent = "display all 👀";
    }
  }
  const left_works = [];
  const right_works = [];
  let works = worksData;
  if (num) {
    works = works.slice(0, num);
  }
  works.forEach((item, index) => {
    if (index === 1 || index % 2 != 0) {
      right_works.push(
        <Item
          key={item.title}
          link={item.link}
          title={item.title}
          desc={item.desc}
          imgName={item.imgName}
          techs={item.techs}
        />
      );
    } else {
      left_works.push(
        <Item
          key={item.title}
          link={item.link}
          title={item.title}
          desc={item.desc}
          imgName={item.imgName}
          techs={item.techs}
        />
      );
    }
  });

  return (
    <AnimatedSectionOnScroll>
      <section id="portfolio" className="mt-[100px]">
        <div className="container">
          <SectionTitle>
            The work I did, and{" "}
            <UnderLine imgName={"orange.svg"}>business</UnderLine> I helped.
          </SectionTitle>

          <div className="grid sm:grid-cols-2 gap-x-10 space-y-10">
            <div className="flex flex-col gap-10">{left_works}</div>
            <div className="sm:pt-40 flex flex-col gap-10">{right_works}</div>
          </div>
          <div>

            {/* toggle display all btn  */}
            <div className="grid place-content-center">
              <span
                id="toggleDiaplayAllWorksBtn"
                onClick={toggleDisplayAll}
                className="mt-4 p-4 text-main-blue-hover hover:text-main-blue  underline font-medium text-lg  capitalize  cursor-pointer  "
              >
                Display All 👀
              </span>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSectionOnScroll>
  );
};

export default WorksDone;
