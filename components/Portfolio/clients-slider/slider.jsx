import Image from "next/image";
import { useEffect, useState } from "react";
import img1 from "../../../public/portfolio/clients/img1.png";
import img2 from "../../../public/portfolio/clients/img2.png";
import sayf from "../../../public/portfolio/clients/sayf.png";
import likeproo from "../../../public/portfolio/clients/likeproo.png";
import { motion, AnimatePresence } from "framer-motion";

import SliderController from "./SliderController";
const Slider = () => {
  const clients = [
    {
      title:
        "Yasser hedped us to create the frontend of our website called likeproo",
      desc: "A very distinguished person in design and cooperative in terms of modifications and design changes I recommend dealing with him",
      name: "Ammar Kotb",
      position: "backend developer",
      img: likeproo,
      bgCollor: "#199ed2",
    },
    {
      title: "Yasser has helped us to made our website called Magiccon",
      desc: "Thank you very very much for the elaborate and wonderful work that met all my conditions with you at work. The work is executed with great quality and workmanship. I was very pleased to deal with you, and God willing, we will continue soon on other projects",
      name: "Seyfeddine Beroual",
      position: "Art Director & Founder at Lamsa Studio",
      img: sayf,
      bgCollor: "#a3a3a3",
    },
  ];

  const [client, setClient] = useState(clients[0]);
  const [index, setIndex] = useState(0);
  const clients_length = clients.length;
  useEffect(() => {
    setClient(() => clients[index]);
  }, [index]);

  const goNext = () => {
    // setClient(clients[1])
    setIndex((curr) => {
      if (curr + 1 >= clients_length) return 0;
      return ++curr;
    });
  };
  const goPrev = () => {
    // setClient(clients[1])
    setIndex((curr) => {
      if (curr - 1 >= 0) return --curr;
      return clients_length - 1;
    });
  };
  return (
    <div className="sm:grid grid-cols-2 gap-8 items-center relative">
      {/* img */}
      <div className=" relative">
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={client.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{duration:0.2, type:'tween',ease:"easeInOut"}}
            className="overflow-hidden rounded-md"
          >
            {/* bg 1 */}
            <div
              style={{ backgroundColor: client.bgCollor }}
              className={`opacity-20 rounded-md w-full h-full absolute bottom-[-40px] left-[-40px]`}
            ></div>
            {/* bg 2 */}
            <div
              style={{ backgroundColor: client.bgCollor }}
              className={`opacity-40 rounded-md w-full h-full absolute bottom-[-20px] left-[-20px]`}
            ></div>

            <Image
              src={client.img}
              alt={client.name}
              width={450}
              height={470}
              layout="responsive"
              placeholder="blur"
              draggable="false"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      {/* text */}
      <div className="pt-4">
         <div className="mt-10 flex justify-end sm:mt-0  sm:absolute sm:bottom-[-50px] sm:right-0">
        <SliderController goPrev={goPrev} goNext={goNext} />
      </div>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={client.title}
            initial={{ opacity: 0, y: "25%" }}
            animate={{ opacity: 1, y: 0}}
            exit={{ opacity: 0, y: "-25%" }}
            transition={{ duration: 0.2,type:'tween',ease:"easeInOut"}}
            className="space-y-4"
          >
            <h3 className="text-main-blue text-2xl font-semibold mt-8 sm:mt-0">
              {client.title}
            </h3>
            <p className="text-main-blue">{client.desc}</p>
            {/* author */}
            <div className="flex justify-start items-center gap-2">
              <span className="text-main-blue font-medium">{client.name}</span>
              <span className="text-main-gray font-medium">
                {client.position}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

     
    </div>
  );
};

export default Slider;
