import UnderLine from "../Under-line";

const ItemTitle = ({ title, imgName }) => {
  return (
    <h2 className="capitalize text-main-blue font-semibold text-3xl mb-4">
      <UnderLine imgName={imgName}>{title}</UnderLine>
    </h2>
  );
};

export default ItemTitle;
