import Link from "next/link";
import Style from "./style.module.css";
import useDownloader from "react-use-downloader";

const BubbleButton = ({ url, text }) => {
  // const { download } = useDownloader();
  return (
    <a href="/cv.pdf" target={'_blank'}
      className="flex justify-center cursor-pointer"
      // onClick={() => download("/cv.pdf", "cv.pdf")}
    >
      <div type={"submit"}
        className={
          Style.btn +
          " " +
          "rounded-md  w-fit h-fit grid place-content-center px-4 py-2 text-main-blue border-4 border-main-blue text-center"
        }
      >
        <span
          className={
            Style.text +
            " " +
            " text-main-blue text-lg font-medium transition-colors duration-300"
          }
        >
          {text}
        </span>
        <div className="w-full h-[200%] absolute top-0 left-0 z-[-1]">
          <span className={Style.bullet}></span>
          <span className={Style.bullet}></span>
          <span className={Style.bullet}></span>
          <span className={Style.bullet}></span>
        </div>
      </div>
      </a>
  );
};

export default BubbleButton;
