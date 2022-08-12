import Style from "./style.module.css";
const TextLink = ({ text }) => {
  return (
    <div>
      <a
        onMouseEnter={(e) => e.target.classList.add(Style.hoverUnderLine)}
        onMouseLeave={(e) => e.target.classList.remove(Style.hoverUnderLine)}
        href={"#" + text}
      >
        {text}
      </a>
      <a className={Style.hoverUnderLine + " hidden"}></a>
    </div>
  );
};

export default TextLink;
