import mainStyle from "../style.module.css";
import ItemTitle from "./item-title";
import Item from "./item";
import SectionTitle from "../section-title";
import UnderLine from "../Under-line";
import Image from "next/image";

const Resume = () => {
  const devSkills = [
    "html / css",
    "responsive designe",
    "javaScript: ES5/ES6",

    "typescript",
    "react js ",
    "next js ",
    "tailwindcss",
    "wroking with api",
    "pug.js",
    "node.js",
    "express.js",
  ];
  const generalSkills = [
    "oop",
    "algorithms",
    "data strectures",
    "problems solving",
    "linux",
    "databases design",
    "Network Layers",
    "git/github",
  ];
  return (
    <section>
      <div className="container space-y-4">
        {/* title */}

        <SectionTitle>
          <UnderLine imgName={"green_white.svg"}>Resume</UnderLine>
        </SectionTitle>

        {/* the grid */}
        <div className="sm:grid sm:grid-cols-2 gap-8 space-y-8 sm:space-y-0">
          {/* ****************  Work experience  ************************ */}

          <div>
            {/* title */}
            <ItemTitle title={"resume"} imgName="orange.svg"/>
            <div className="space-y-6">
              <Item
                title={"Freelancer"}
                desc={
                  "Working as a freelancer and helping startups and entrepreneurial individuals enhance their online presence and achieve significant growth in their business growth"
                }
                date={"2021 - currently"}
              />
            </div>
          </div>

          {/* ****************  Education  ************************ */}
          <div>
            {/* title */}
            <ItemTitle title={"Education"} imgName={"green_white.svg"} />
            <div className="space-y-2">
              <Item
                title={"Faculty of Exact Sciences"}
                desc={"bachelor degree in software engineering"}
                date={"October 2020 - June 2023"}
              />
            </div>
          </div>
        </div>

        {/* ****************  Skills  ************************ */}
        <div>
          {/* title */}
          <ItemTitle title={"Skills"} imgName={"green_white.svg"} />

          <div className="sm:grid sm:grid-cols-2 gap-8 space-y-8 sm:space-y-0">
            {/* *******  development  ***** */}
            <ul>
              {devSkills.map((item) => (
                <li
                  className="capitalize text-main-blue text-lg font-normal"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
            {/* *******  general  ******** */}

            <ul>
              {generalSkills.map((item) => (
                <li
                  className="capitalize text-main-blue text-lg font-normal"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ****************  certificates  ************************ */}
        <ItemTitle title={"certificates"} imgName={"move.svg"} />
        <div className="sm:grid sm:grid-cols-2 gap-8 space-y-8 sm:space-y-0">
          <Item
            title={"HCIA routing and switching"}
            desc={
              "With HCNA certification, you demonstrate a basic understanding of small and medium-sized networks, including general network technologies, and the ability to assist the design of small and medium-sized networks, and implement the designs using Huawei routing and switching devices."
            }
            date={"Octobre 2021"}
          />
          <Item
            title={"HCIA Security "}
            desc={
              "HCIA Security Course provides engineers with the basic ability to configure and maintain small and medium-sized enterprise information security solutions, and have the ability to achieve basic network security for SMBs and meet the basic needs of a variety of security applications."
            }
            date={"December 2021"}
          />
          <Item
            title={"Barmej.com"}
            desc={"C language the basics"}
            date={"20 July 2019"}
          />
          <Item
            title={"One million arab coders initiative"}
            desc={"Android Development Track with java"}
            date={"Summer 2019"}
          />
          <Item
            title={"Nadrus.com"}
            desc={"Social Engineering"}
            date={"06 July 2019"}
          />
          <Item
            title={"Summer School 2022"}
            date={
              "It was under the slogan 'Be an entrepreneur', where we learned how to turn the idea into a real project capable of generating profit"
            }
          />
        </div>
        {/* ***************************** */}
        <div className="sm:grid sm:grid-cols-2 gap-8 space-y-8 sm:space-y-0">
          <div></div>
          <div className="relative">
            <div className="bg-[#f4fcfe] w-[min(100%,300px)] h-[min(100%,300px)] absolute top-0 left-0 rounded-full z-0"></div>
            <div className="z-1 relative">
              <Image
                src="/portfolio/agreement_memoji.png"
                width={180}
                height={180}
                alt="img_lets_talk"
              />
              <div className="space-y-1">
                <span className="text-main-green text-2xl font-Architects_Daughter italic">
                  Catcha !
                </span>
                <div className="text-main-blue font-semibold text-4xl">
                  <p> Got a project?</p>
                  <a
                    className="hover:underline text-main-blue/80 hover:text-main-blue-hover transition-colors"
                    href="#contact"
                  >
                    <UnderLine
                      text={"Let’s Talk!"}
                      imgName={"green_white.svg"}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
