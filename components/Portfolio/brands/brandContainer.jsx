import Image from "next/image";
import Link from "next/link";

const BrandContainer = ({ img, link }) => {
  return (
    <div className="cursor-pointer grayscale hover:grayscale-0 transition shadow-sm rounded-md py-1 px-4 hover:shadow-md">
      <Link href={link ? link : "#"} passHref>
        <a target="_blank">
          <Image
            draggable={false}
            src={img}
            width={"220px"}
            height={"120px"}
            objectFit={"contain"}
            alt={"magicoon_icon"}
          />
        </a>
      </Link>
    </div>
  );
};

export default BrandContainer;
