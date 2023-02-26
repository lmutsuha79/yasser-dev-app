import Style from "./style.module.css";
const TextLink = ({ text, url }) => {
  return (
    <div>
      <a
        className="capitalize"
        onMouseEnter={(e) => e.target.classList.add(Style.hoverUnderLine)}
        onMouseLeave={(e) => e.target.classList.remove(Style.hoverUnderLine)}
        href={url ? url : "/#" + text}
      >
        {text}
      </a>
      <a className={Style.hoverUnderLine + " hidden"}></a>
    </div>
  );
};

export default TextLink;
