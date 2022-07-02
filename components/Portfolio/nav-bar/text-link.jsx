const TextLink = ({ text }) => {
  return (
    <a
      onMouseEnter={(e) => e.target.classList.add("img_line")}
      onMouseLeave={(e) => e.target.classList.remove("img_line")}
      href={'#'+text}
    >
      {text}
    </a>
  );
};

export default TextLink;
