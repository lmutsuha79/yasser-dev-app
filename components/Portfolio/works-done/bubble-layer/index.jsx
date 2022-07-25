import Style from "./Style.module.css";
const BubbleLayer = ({ isHover }) => {
//   const jiji_class = jiji;
  return (
    <div className={isHover ? Style.jiji : "khra" + " " + "w-full h-full"}>
      <div className={Style.btn}>
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

export default BubbleLayer;
