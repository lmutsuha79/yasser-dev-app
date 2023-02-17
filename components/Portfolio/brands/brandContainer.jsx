import Image from "next/image";

const BrandContainer = ({ img }) => {
  return (
    <div className="grayscale hover:grayscale-0 transition shadow-sm rounded-md py-1 px-4 hover:shadow-md">
      <Image
        src={img}
        width={"200px"}
        height={"100px"}
        objectFit={"contain"}
        alt={"magicoon_icon"}
      />
    </div>
  );
};

export default BrandContainer;