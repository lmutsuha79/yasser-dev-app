import Link from "next/link";
import Style from "./style.module.css";

const BubbleButton = ({ url, text }) => {
  return (
    <div className="flex justify-center">
      <div className={Style.btn}>
        <a
          className="text-main-blue text-lg font-medium transition-colors duration-300"
          href={url}
        >
          {text}
        </a>
        <div className="w-full h-[200%] absolute top-0 left-0 z-[-1]">
          <span className={Style.bullet}></span>
          <span className={Style.bullet}></span>
          <span className={Style.bullet}></span>
          <span className={Style.bullet}></span>
        </div>
      </div>
    </div>
  );
};

export default BubbleButton;
