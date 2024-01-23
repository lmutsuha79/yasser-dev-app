import Image from "next/image";

const TechItem = ({ img }) => {
  return (
    <div className="shadow-md rounded-md transform overflow-hidden transition-transform">
      <div className="transition w-[250px] h-[150px] transform hover:scale-[115%] ease-in-out overflow-hidden shadow-sm rounded-md hover:shadow-md">
        <Image
          draggable={false}
          src={img}
          className="w-full h-full "
          width={250}
          height={150}
          objectFit={"cover"}
          alt={"magicoon_icon"}
        />
      </div>
    </div>
  );
};

export default TechItem;
