import Image from "next/image";
import { useEffect, useState } from "react";
import img1 from "../../../public/portfolio/clients/img1.png";
import img2 from "../../../public/portfolio/clients/img2.png";

import SliderController from "./SliderController";
const Slider = () => {
  const clients = [
    {
      title:
        "John has helped our business deliver incredible results, leading success for our UI & UX",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper, sapien sit amet scelerisque laoreet, eros justo congue neque, in maximus tellus velit vitae lacus. Nam dapibus augue ante, molestie malesuada est ullamcorper vel. Fusce purus ipsum, gravida ut tempus id, aliquam a orci.",
      name: "Christina Klein",
      position: "CEO @APPLE",
      img: img1,
      bgCollor: "#fbe0cb",
    },
    {
      title:
        "We've worked with John across all our projects and it's our competitive advantage.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper, sapien sit amet scelerisque laoreet, eros justo congue neque, in maximus tellus velit vitae lacus. Nam dapibus augue ante, molestie malesuada est ullamcorper vel. Fusce purus ipsum, gravida ut tempus id, aliquam a orci.",
      name: "Christina Klein",
      position: "CEO @APPLE",
      img: img2,
      bgCollor: "#d0eaeb",
    },
  ];

  const [client, setClient] = useState(clients[0]);
  const [index, setIndex] = useState(0);
  const clients_length = clients.length;
  console.log(clients_length)
  useEffect(() => {
    setClient(() => clients[index]);
    console.log();
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
        <div className="overflow-hidden rounded-md">
          <div
            style={{ backgroundColor: client.bgCollor }}
            className={`opacity-20 rounded-md w-full h-full absolute bottom-[-40px] left-[-40px]`}
          ></div>
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
          />
        </div>
      </div>
      {/* text */}
      <div className="space-y-4">
        <h3 className="text-main-blue text-2xl font-semibold">
          {client.title}
        </h3>
        <p className="text-main-blue">{client.desc}</p>
        {/* author */}
        <div className="flex justify-start items-center gap-2">
          <span className="text-main-blue">{client.name}</span>
          <span className="text-main-gray font-medium">{client.position}</span>
        </div>
        <div className="absolute bottom-0 right-0">
        <SliderController goPrev={goPrev} goNext={goNext} />

        </div>
      </div>
    </div>
  );
};

export default Slider;
