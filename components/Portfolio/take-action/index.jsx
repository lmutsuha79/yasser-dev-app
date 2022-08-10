import UnderLine from "../Under-line";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import Style from "./Style.module.css";
import Image from "next/image";
const TakeAction = () => {
  return (
    <section className="mt-[100px] relative">
      {/* circle layer right */}
      <div className="hidden xl:block absolute top-[-30%] right-0 ">
        <Image
          src={"/portfolio/right_circle.svg"}
          layout={"fixed"}
          width={620}
          height={612}
        />
      </div>
      {/* circle layer left */}
      <div className="absolute top-[-80%] left-0 ">
        <Image
          src={"/portfolio/left_circle.svg"}
          layout={"fixed"}
          width={620}
          height={612}
        />
      </div>
      {/* text content */}
      <div className="container">
        <div className="relative max-w-[720px] mx-auto text-4xl font-semibold text-main-blue text-center">
          <div className="mb-[50px]">
            <p>
              Let me know if you want to talk about a potential collaboration.
              I’m available
            </p>
            <p className="font-bold">
              for <UnderLine imgName={"orange.svg"}>Freelance Work</UnderLine>.
            </p>
          </div>
          {/* link to contact */}
          <Link href="#">
            <a
              className={
                Style.generalLink +
                " " +
                "flex items-center justify-center gap-4 text-[#f3ceb1] hover:text-[#d0eaeb] transition-colors underline text-5xl font-medium"
              }
            >
              <div> Let’s design your app</div>
              <div className="overflow-hidden h-[40px]">
                <div
                  className={
                    Style.iconsContainer +
                    " " +
                    " transform transition-transform "
                  }
                >
                  <div className="grid place-content-center text-[40px]">
                    <FontAwesomeIcon icon={faArrowUpFromBracket} />
                  </div>
                  <div className="grid place-content-center text-[40px]">
                    <FontAwesomeIcon icon={faArrowUpFromBracket} />
                  </div>{" "}
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TakeAction;
