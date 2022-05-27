import { useEffect, useRef, useState } from "react";

const TableContent = ({ contentList, title, active }) => {
  const [allHeaders, setAllHeaders] = useState([]);
  // const [activeSection, setActiveSection] = useState();
  const link = useRef();

  useEffect(() => {
    const OBSERVER_OPTIONS = {
      rootMargin: "-100px"
      // threshold: 1,

    }
    const observer = new IntersectionObserver((headings) => {
      headings.forEach((head, index) => {
        if (head.isIntersecting) {
          // get id of the title of active section
          link.current = head.target.firstChild.id;
          document
            .getElementById("link_" + head.target.firstChild.id)
            .classList.add("bg-nav-border-gray");
          // setActiveSection(head.target.firstChild.id);
        } else {
          document
            .getElementById("link_" + head.target.firstChild.id)
            .classList.remove("bg-nav-border-gray");

        }
      });
    },OBSERVER_OPTIONS);
    const all_headers = document.querySelectorAll("h2");
    setAllHeaders((curr) => {
      return [...all_headers].map((item) => {
        // apply only one

        {
          observer.observe(item.parentElement);
        }

        return (
          <a
            key={item.id}
            href={"#" + item.id}
            id={"link_" + item.id}
            className={`text-main-blue text-sm font-medium rounded-md hover:bg-nav-border-gray px-1 py-2 transition-colors `}
          >
            {item.textContent}
          </a>
        );
      });
    });

    return () => observer.disconnect();
  }, []);
  return (
    <div className="space-y-1 sm:sticky top-[25%]">
      <h3 className="text-main-blue font-bold ">
        {title ? title : "contents"}
      </h3>
      <ul className="pl-1 flex flex-col gap-[1px]">{allHeaders}</ul>
      <div className="h-[2px] w-full bg-nav-border-gray rounded-xl "></div>
    </div>
  );
};

export default TableContent;
