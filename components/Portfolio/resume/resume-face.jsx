import Image from "next/image";
import UnderLine from "../Under-line";

import { ContactShowContext } from "..";
import { useContext } from "react";

const ResumeFace = () => {
  const [closeContact, oppenContact, contactIsOn] =
    useContext(ContactShowContext);

  return (
    <div className="relative">
      <div className="bg-[#f4fcfe] w-[min(100%,300px)] h-[min(100%,300px)] absolute top-0 left-0 rounded-full z-0"></div>
      <div className="z-1 relative">
        <Image
          src="/portfolio/agreement_memoji.png"
          width={180}
          height={180}
          alt="img_lets_talk"
        />
        <div className="space-y-1">
          <span className="text-main-green text-2xl font-Architects_Daughter italic">
            Catcha !
          </span>
          <div className="text-main-blue font-semibold text-4xl">
            <p> Got a project?</p>
            <div
              onClick={oppenContact}
              className="cursor-pointer hover:underline text-main-blue/80 hover:text-main-blue-hover transition-colors"
            >
              <div className="text-main-blue hover:text-main-blue-hover">
                <UnderLine imgName={"move.svg"}>Let&#39;s Talk</UnderLine>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeFace;
