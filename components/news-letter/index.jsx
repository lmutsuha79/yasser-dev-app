import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
const NewsLetter = () => {
  return (
    <div className="bg-main-blue-hover rounded-xl bg-opacity-20 py-12 px-8 space-y-8 flex flex-col items-center md:flex-row md:justify-around md:items-center">
      
        {/* text */}

        <div className="space-y-4 px-2 md:px-8 w-full md:w-auto md:flex md:flex-col">
          <div className="sm:ml-8 text-center sm:text-left">
            <div className="space-x-4">
              <FontAwesomeIcon className="text-main-blue text-2xl" icon={faPaperPlane} />
              <span className="text-main-blue-hover text-xl font-medium">
                Subscribe
              </span>
            </div>
            <h3 className="text-main-blue text-xl font-bold">
              to our Newletter
            </h3>
          </div>

          <form action="" method="post" className="sm:h-[60px] gap-4 flex flex-col items-center sm:flex-row sm:justify-center sm:items-center">
            <input
              className="w-full  h-full rounded-lg  py-5 px-10 text-main-blue autofill:text-main-blue text-base font-semibold placeholder:text-main-blue-hover placeholder:text-base placeholder:font-normal outline-none"
              type="email"
              name="email"
              id="email_subscribe_inp"
              placeholder="Entre your email"
            />
            <div className="sm:h-full py-4 sm:py-0 px-4 rounded-lg bg-blue-with-hover text-white text-base font-blod grid items-center cursor-pointer">
              <span>Subscribe</span>
            </div>
          </form>
        </div>
    

      <div className="">
        {/* img */}
        <div>
          <Image
            src={"/news-letter.png"}
            width={242}
            height={326}
            objectFit="cover"
            objectPosition="center"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
