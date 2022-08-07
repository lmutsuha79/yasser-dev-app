const UnderLine = ({ children, imgName }) => {
  return (
    <div className={"inline-block relative"}>
      <span>{children}</span>
      <img
        className="absolute"
        src={"/portfolio/text_lines/" + imgName}
        alt="img"
      />
    </div>
  );
};

export default UnderLine;
