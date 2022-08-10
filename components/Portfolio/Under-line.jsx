import { useEffect } from "react";
import { useRef } from "react";
const UnderLine = ({ children, imgName }) => {
  const text = useRef();
  const img = useRef();

  useEffect(()=>{
    const text_width = text.current.offsetWidth;
    // console.log(`width of ${text.current} is ${text_width}`)
    img.current.style.width = `${text_width}px`
  },[])

  return (
    <div className={"inline-block relative"}>
      <span ref={text}>{children}</span>
      <img
        ref={img}
        
        
        className="absolute"
        src={"/portfolio/text_lines/" + imgName}
        alt="img"
      />
    </div>
  );
};

export default UnderLine;
