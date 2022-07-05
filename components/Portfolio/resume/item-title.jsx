import Image from "next/image";
import mainStyle from "../style.module.css";

const ItemTitle = ({ title, imgClass, spaceY }) => {
  spaceY = spaceY ? spaceY : 30;
  return (
    <div>
      <h2 className={`img_line ${imgClass} w-fit `} style={{paddingBottom: spaceY}}>{title}</h2>
    </div>
  );
};

export default ItemTitle;
