import Image from "next/image";
import Link from "next/link";
import Style from "./style.module.css"

const Item = ({ title, desc, imgName, link }) => {
  return (
    <Link href={link} passHref>
      <div className={Style.item + " " + "cursor-pointer"}>
        {/* img container */}
        <div className="overflow-hidden mb-4">
          {/* img div */}
          <div
            className="theImg transform transition-transform duration-700 h-[580px] bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url("/portfolio/works/${imgName}")` }}
          ></div>
        </div>
        <div className="space-y-2">
          <h2 className="text-main-blue font-semibold text-2xl">{title}</h2>
          <p className="text-main-blue font-medium text-lg">{desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
