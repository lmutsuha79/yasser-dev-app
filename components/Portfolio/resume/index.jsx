import mainStyle from "../style.module.css";
import ItemTitle from "./item-title";
import Item from './item'

const Resume = () => {
  return (
    <section>
      <div className="container">
        {/* title */}
        <div className={mainStyle.sectionTitle}>
          <ItemTitle title={"Resume"} imgClass={"img_line_move"} spaceY={15} />
        </div>
        {/* the grid */}
        <div className="sm:grid sm:grid-cols-2">
          <div>
            {/* title */}
            <div className="text-main-blue font-semibold text-2xl">
              <ItemTitle
                title={"Work Experience"}
                imgClass={"img_line_white_green"}
              />
            </div>
            <Item />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
