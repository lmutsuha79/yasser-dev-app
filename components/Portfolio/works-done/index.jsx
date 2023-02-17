import { motion } from "framer-motion";
import SectionTitle from "../section-title";
import UnderLine from "../Under-line";
import Item from "./item";
import AnimatedSectionOnScroll from "../AnimatedSectionOnScroll";

const WorksDone = ({ numToShow }) => {
  const left_works = [];
  const right_works = [];
  let works = [
    {
      title: "Magicoon",
      link: "https://magicoon.com/",
      desc: "Jobriver is a Polish employment platform. It often helps developers to find a job that suits them easily by filtering!",
      imgName: "magicoon-hero.png",
      techs: ["Html/Css", "JavaScript", "tailwindCss"],
    },
    {
      title: "TO-do Chrom Extention",
      link: "https://github.com/lamani79/to_do_list_chrom_widget.git",
      desc: "Jobriver is a Polish employment platform. It often helps developers to find a job that suits them easily by filtering!",
      imgName: "to_do_chrom_1.jpg",
      techs: ["Html/Css", "Sass", "JavaScript"],
    },
    {
      title: "Jadoo tailwind Template",
      link: "https://agitated-euler-c9575e.netlify.app/",
      desc: "Jobriver is a Polish employment platform. It often helps developers to find a job that suits them easily by filtering!",
      imgName: "travell_tailwind-2.png",
      techs: ["Html/Css", "JavaScript", "tailwindCss"],
    },
    {
      title: "Doob Template",
      link: "https://lamani79.github.io/Doob_template/",
      desc: "Jobriver is a Polish employment platform. It often helps developers to find a job that suits them easily by filtering!",
      imgName: "doob-hero.png",
      techs: ["Html/Css", "Scss", "JavaScript"],
    },
    {
      title: "Pomodoro PWA with Vue",
      link: "https://happy-sinoussi-447aef.netlify.app/",
      desc: "Jobriver is a Polish employment platform. It often helps developers to find a job that suits them easily by filtering!",
      imgName: "pomodoro_vue_app-1.webp",
      techs: ["Html/Css", "Vue.js", "PWA"],
    },
    {
      title: "Type BlogTemplate",
      link: "https://lamani79.github.io/first_bloger_template/",
      desc: "Jobriver is a Polish employment platform. It often helps developers to find a job that suits them easily by filtering!",
      imgName: "type-3.png",
      techs: ["Html/Css", "JavaScript", "Scss"],
    },
  ];
  if (numToShow) {
    works = works.slice(0, numToShow);
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
        </div>
      </section>
    </AnimatedSectionOnScroll>
  );
};

export default WorksDone;
