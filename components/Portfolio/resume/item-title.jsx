import UnderLine from "../Under-line";

const ItemTitle = ({ title, imgName }) => {
  return (
    <h2 className="capitalize text-main-blue font-semibold text-2xl mb-4">
      <UnderLine text={title} imgName={imgName}></UnderLine>
    </h2>
  );
};

export default ItemTitle;
