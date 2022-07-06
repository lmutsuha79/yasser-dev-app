import UnderLine from "./Under-line";
import mainStyle from './style.module.css'

const SectionTitle = (props) => {
  return <h2 className={mainStyle.sectionTitle}>{props.children}</h2>;
};

export default SectionTitle;
