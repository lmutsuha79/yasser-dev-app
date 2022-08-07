import UnderLine from "./Under-line";
import mainStyle from "./style.module.css";

const SectionTitle = (props) => {
  return (
    <header>
      <h2 className={mainStyle.sectionTitle}>{props.children}</h2>
    </header>
  );
};

export default SectionTitle;
