import { motion } from "framer-motion";
import SectionTitle from "../section-title";
import UnderLine from "../Under-line";
import Item from "./item";
import AnimatedSectionOnScroll from "../AnimatedSectionOnScroll";

const WorksDone = () => {
  const left_works = [];
  const right_works = [];
  const works = [
    {
      title: "Magicoon",
      link: "https://magicoon.com/",
      desc: "Jobriver is a Polish employment platform. It often helps developers to find a job that suits them easily by filtering!",
      imgName: "magicoon-hero.png",
    },
    {
      title: "TO-do Chrom Extention",
      link: "https://github.com/lamani79/to_do_list_chrom_widget.git",
      desc: "Jobriver is a Polish employment platform. It often helps developers to find a job that suits them easily by filtering!",
      imgName: "to_do_chrom_1.jpg",
    },
    {
      title: "Jadoo tailwind Template",
      link: "https://agitated-euler-c9575e.netlify.app/",
      desc: "Jobriver is a Polish employment platform. It often helps developers to find a job that suits them easily by filtering!",
      imgName: "travell_tailwind-2.png",
    },
    {
      title: "Doob Template",
      link: "https://lamani79.github.io/Doob_template/",
      desc: "Jobriver is a Polish employment platform. It often helps developers to find a job that suits them easily by filtering!",
      imgName: "doob-hero.png",
    },
    {
      title: "Pomodoro PWA with Vue",
      link: "https://happy-sinoussi-447aef.netlify.app/",
      desc: "Jobriver is a Polish employment platform. It often helps developers to find a job that suits them easily by filtering!",
      imgName: "pomodoro_vue_app-1.webp",
    },
    {
      title: "Type BlogTemplate",
      link: "https://lamani79.github.io/first_bloger_template/",
      desc: "Jobriver is a Polish employment platform. It often helps developers to find a job that suits them easily by filtering!",
      imgName: "type-3.png",
    },
  ];
  works.forEach((item, index) => {
    if (index === 1 || index % 2 != 0) {
      right_works.push(
        <Item
          key={item.title}
          link={item.link}
          title={item.title}
          desc={item.desc}
          imgName={item.imgName}
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
        />
      );
    }
  });

  return (
    <AnimatedSectionOnScroll>
      <section
       
        className="mt-[100px]"
      >
        <div className="container">
          <SectionTitle>
            The work I do, and{" "}
            <UnderLine imgName={"orange.svg"}>business</UnderLine> I help.
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
