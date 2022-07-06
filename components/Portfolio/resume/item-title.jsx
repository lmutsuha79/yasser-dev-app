import Image from "next/image";
import mainStyle from "../style.module.css";

const ItemTitle = ({ title, imgClass, spaceY,textSize }) => {
  spaceY = spaceY ? spaceY : 20;
  return (
    <div className={"text-main-blue font-semibold"}>
      <h2 className={`img_line ${imgClass} w-fit `} style={{paddingBottom: spaceY, fontSize: textSize ? textSize : '32px' }}>{title}</h2>
    </div>
  );
};

export default ItemTitle;
