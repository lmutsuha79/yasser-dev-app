import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useRef, useState } from "react";
import axios from "axios";
import ResultMessage from "./result-message";
import { UseValideEmail } from "../../util/UseValideEmail";

const NewsLetter = () => {
  
  const emailRef = useRef(null);
  const [resultIsVisible, setResultIsVisible] = useState(false);
  function closeMessage() {
    setResultIsVisible(false);
  }
  const [state, setState] = useState("idle");
  const [errorMsg, setErrorMsg] = useState(null);
  const submitForm = async (e) => {
    e.preventDefault();
    setState("Loading");
    
    const email = emailRef.current.value.trim();
    // email != null && email.length > 0 && email.match(regExp);
    if (!UseValideEmail(email)) {
      setState("Error");
      setErrorMsg("please entre a valide email address");
    }
    
    else {
      try {
        const res = await axios.post("/api/subscription", { email });
        console.log(`response of the internal api is: ${res}`);
        setState("Success");
      } catch (e) {
        
        console.log(e.response.data.error);
        setErrorMsg(e.response.data.error);
        setState("Error");
      }
    }
    emailRef.current.value = "";
    setResultIsVisible(true);
  };

  return (
    <div>
      <ResultMessage
        resultIsVisible={resultIsVisible}
        closeMessage={closeMessage}
        state={state}
        errorMsg={errorMsg}
      />

      <div className="bg-main-blue-hover rounded-xl bg-opacity-20 py-12 px-8 space-y-8 flex flex-col items-center md:flex-row md:justify-around md:items-center">
        {/* text */}

        <div className="space-y-4 px-2 md:px-8 w-full md:w-auto md:flex md:flex-col">
          <div className="sm:ml-8 text-center sm:text-left">
            <div className="space-x-4">
              <FontAwesomeIcon
                className="text-main-blue dark:text-white text-2xl"
                icon={faPaperPlane}
              />
              <span className="text-main-blue-hover dark:text-white text-2xl font-bold">
                Subscribe
              </span>
            </div>
            <span className="text-main-blue dark:text-white text-md font-medium">
              to my newsletter to don&apos;t miss any updates
            </span>
          </div>

          <form
            action="/api/subscription"
            method="post"
            className="sm:h-[60px] gap-4 flex flex-col items-center sm:flex-row sm:justify-center sm:items-center"
          >
            <input
              ref={emailRef}
              className="w-full  h-full rounded-lg  py-5 px-10 text-main-blue autofill:text-main-blue text-base font-semibold placeholder:text-main-blue-hover placeholder:text-base placeholder:font-normal outline-none"
              type="email"
              name="email"
              id="email_subscribe_inp"
              placeholder="Entre your email"
            />
            <button
              disabled={state === "Loading"}
              onClick={submitForm}
              className="sm:h-full py-4 sm:py-0 px-4 rounded-lg bg-main-blue hover:bg-dark-bg-blue  transition-colors  text-white  text-base font-blod grid items-center cursor-pointer"
            >
              <span>Subscribe</span>
            </button>
          </form>
        </div>

        <div className="">
          {/* img */}
          <div>
            <Image
              src={"/news-letter.png"}
              alt="subscribe to my newsletter"
              width={242}
              height={326}
              objectFit="cover"
              objectPosition="center"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
