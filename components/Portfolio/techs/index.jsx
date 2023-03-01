import Image from "next/image";
import AnimatedSectionOnScroll from "../AnimatedSectionOnScroll";
import BrandContainer from "../brands/brandContainer";
import SectionTitle from "../section-title";
import UnderLine from "../Under-line";
import Styles from "./style.module.css";

const Techs = () => {
  const front_techs = [
    {
      title: "html",
      img: "/portfolio/techs/nextJs.png",
    },
    {
      title: "html",
      img: "/portfolio/techs/react.png",
    },
    {
      title: "html",
      img: "/portfolio/techs/redux.jpg",
    },
    {
      title: "html",
      img: "/portfolio/techs/typescript.png",
    },
    {
      title: "html",
      img: "/portfolio/techs/tailwind.png",
    },

  
  ];
  const back_techs = [
    {
      title: "html",
      img: "/portfolio/techs/nodejs.png",
    },
    {
      title: "html",
      img: "/portfolio/techs/express.png",
    },
    {
      title: "html",
      img: "/portfolio/techs/mongodb.webp",
    },
    {
      title: "html",
      img: "/portfolio/techs/firebase.png",
    },
    {
      title: "html",
      img: "/portfolio/techs/laravel.jpg",
    },
    {
      title: "html",
      img: "/portfolio/techs/mysql.jpg",
    },
    {
      title: "jiji",
      img: "/portfolio/techs/git-vs-github.png"
    }
  ];
  const techs = [...front_techs, ...back_techs];
  return (
    <>
      <AnimatedSectionOnScroll>
        <section id="brands" className="mt-[60px]">
          <div className="container">
            <div className="text-center">
              <SectionTitle>
                <UnderLine imgName={"orange.svg"}>technologies </UnderLine>
                {" " + "I love working with"}
              </SectionTitle>
            </div>

            <div className="mt-12 grid grid-cols-4 items-center justify-center gap-4 ">
              {techs.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="shadow-md rounded-md transform hover:scale-105 transition-transform"
                  >
                    {/* <BrandContainer img={item.img} /> */}
                    <div className="hover:grayscale-0 transition shadow-sm rounded-md py-1 px-4 hover:shadow-md">
                      <Image
                        draggable={false}
                        src={item.img}
                        width={"250px"}
                        height={"150px"}
                        objectFit={"contain"}
                        alt={"magicoon_icon"}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </AnimatedSectionOnScroll>
    </>
  );
};

export default Techs;
