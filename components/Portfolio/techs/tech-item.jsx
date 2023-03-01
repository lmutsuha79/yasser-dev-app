import Image from "next/image";

const TechItem = ({img}) => {
  return (
    <div
      className="shadow-md rounded-md transform hover:scale-105 transition-transform"
    >
      <div className="transition shadow-sm rounded-md py-1 px-4 hover:shadow-md">
        <Image
          draggable={false}
          src={img}
          width={"250px"}
          height={"150px"}
          objectFit={"contain"}
          alt={"magicoon_icon"}
        />
      </div>
    </div>
  );
};

export default TechItem;
