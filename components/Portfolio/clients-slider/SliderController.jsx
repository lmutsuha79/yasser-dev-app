import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const SliderController = ({goNext,goPrev}) => {
      return (
            <div className="flex items-center gap-4">
            {/* arrow left */}
            <div onClick={goPrev} className="w-fit cursor-pointer p-1 text-xl text-main-blue hover:text-main-blue-hover transition-colors">
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            {/* arrow right */}
            <div onClick={goNext} className="w-fit cursor-pointer p-1 text-xl text-main-blue hover:text-main-blue-hover transition-colors transform rotate-180">
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
          </div>
      );
}

export default SliderController;