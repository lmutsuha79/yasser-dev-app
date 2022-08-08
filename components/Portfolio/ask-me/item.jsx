import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
const Item = ({ question, answer }) => {
  return (
    <div
      className="cursor-pointer space-y-4"
      onClick={(e) => {
        const arrow_icon =
          e.currentTarget.firstChild.querySelector(".item_icon");
        const hidden_part = e.currentTarget.querySelector(".hidden_part");
        //   console.log(e.currentTarget.);
        const max_h = hidden_part.scrollHeight;
        const is_active = hidden_part.classList.contains("is_active");
        if (!is_active) {
          hidden_part.style.maxHeight = max_h + "px";
        } else {
          hidden_part.style.maxHeight = "0px";
        }
        hidden_part.classList.toggle("is_active");
        arrow_icon.classList.toggle("rotate-180");
      }}
    >
      {/* question */}
      <div className="shown_part flex justify-between items-start text-main-blue hover:text-main-blue-hover transition-colors">
        <p className=" font-semibold text-3xl">{question}</p>
        <div className="transform transition-transform item_icon cursor-pointer text-xl ">
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </div>
      {/* answer hidden part */}
      <div className="hidden_part max-h-0 overflow-hidden transition-all">
        <p className="text-main-blue text-lg">{answer}</p>
      </div>
    </div>
  );
};

export default Item;
