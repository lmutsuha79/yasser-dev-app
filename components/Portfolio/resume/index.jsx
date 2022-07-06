import mainStyle from "../style.module.css";
import ItemTitle from "./item-title";
import Item from "./item";

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
    "Vscode",
  ];
  return (
    <section>
      <div className="container">
        {/* title */}
        <div className={mainStyle.sectionTitle}>
          <ItemTitle
            title={"Resume"}
            imgClass={"img_line_move"}
            spaceY={15}
            textSize={48}
          />
        </div>
        {/* the grid */}
        <div className="sm:grid sm:grid-cols-2 gap-8 space-y-8 sm:space-y-0">
          {/* ****************  Work experience  ************************ */}

          <div>
            {/* title */}
            <div className="text-main-blue font-semibold text-2xl">
              <ItemTitle
                title={"Work Experience"}
                imgClass={"img_line_white_green"}
                spaceY={25}
              />
            </div>
            <div className="space-y-6">
              <Item
                title={"Freelancer"}
                desc={
                  "Working as a freelancer and helping startups and entrepreneurial individuals enhance their online presence and achieve significant growth in their business growth"
                }
                date={"2021 - currently"}
              />
              {/* <Item
                title={"Apple"}
                desc={"Product Designer"}
                date={"December 2019 - "}
              /> */}
            </div>
          </div>

          {/* ****************  Education  ************************ */}

          <div>
            {/* title */}
            <div className="text-main-blue font-semibold text-2xl">
              <ItemTitle
                title={"Education"}
                imgClass={"img_line_orange"}
                spaceY={10}
              />
            </div>
            <div className="space-y-2">
              <Item
                title={"Faculty of Exact Sciences"}
                desc={"bachelor degree in software engineering"}
                date={"October 2020 - June 2023"}
              />
              {/* <Item
              title={"Apple"}
              desc={"Product Designer"}
              date={"December 2019 - "}
            /> */}
            </div>
          </div>

          {/* ****************  Skills  ************************ */}

          <div>
            {/* title */}
            <ItemTitle
              title={"Skills"}
              imgClass={"img_line_white_green"}
              spaceY={1}
              textSize={""}
            />

            <ul>
              <h3 className="text-main-blue text-2xl font-semibold">
                Development
              </h3>
              {devSkills.map((item) => (
                <li
                  className="capitalize text-main-blue text-lg font-semibold"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* ****************  Tool  ************************ */}

          <div>
            {/* title */}
            {/* <ItemTitle
              title={"Skills"}
              imgClass={"img_line_move"}
              spaceY={10}
              textSize={""}
            /> */}
            <br></br>
            <br></br>

            <ul>
              <h3 className="text-main-blue text-2xl font-semibold">General</h3>
              {generalSkills.map((item) => (
                <li
                  className="capitalize text-main-blue text-lg font-semibold"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* ****************  certificates  ************************ */}

          <div>
            {/* title */}
            <div className="text-main-blue font-semibold text-2xl">
              <ItemTitle title={"certificates"} imgClass={"img_line_move"} />
            </div>
            <ItemTitle title={"in-IT"} spaceY={""} />
            <div className="space-y-6">
              <Item
                title={"Huawei HCIA routing and switching"}
                date={
                  "With HCNA certification, you demonstrate a basic understanding of small and medium-sized networks, including general network technologies, and the ability to assist the design of small and medium-sized networks, and implement the designs using Huawei routing and switching devices."
                }
                // date={"november 2021 "}
              />
              <Item
                title={"Huawei HCIA Security "}
                date={
                  "HCIA Security Course provides engineers with the basic ability to configure and maintain small and medium-sized enterprise information security solutions, and have the ability to achieve basic network security for SMBs and meet the basic needs of a variety of security applications."
                }
                // date={"november 2021 "}
              />
              <Item
                title={"Barmej.com"}
                desc={"C language the basics"}
                date={"20 July 2019"}
              />
              <Item
                title={"One million arab coders initiative"}
                desc={"Android Development Track with java"}
                date={"__"}
              />
              <Item
                title={"Nadrus.com"}
                desc={"Social Engineering"}
                date={"06 July 2019"}
              />
            </div>
          </div>
          {/* ****************  certificates  ************************ */}

          <div>
            {/* title */}
            <div className="text-main-blue font-semibold text-2xl">
              <ItemTitle title={"certificates"} imgClass={"img_line_move"} />
            </div>
            <ItemTitle title={"others"} spaceY={""} />
            <div className="space-y-6">
              <Item
                title={"Summer School 2022"}
                desc={
                  "It was under the slogan 'Be an entrepreneur', where we learned how to turn the idea into a real project capable of generating profit"
                }
                date={"Summer 2022"}
              />
              <Item
                title={"Nadrus.com"}
                desc={"Social Engineering"}
                date={"06 July 2019"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
