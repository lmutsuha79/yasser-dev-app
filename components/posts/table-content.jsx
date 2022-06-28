import { useEffect, useState } from "react";

const TableContent = ({ tableTitle, pathName }) => {
  const [allHeaders, setAllHeaders] = useState([]);

  useEffect(() => {
    const all_headers = Array.from(document.querySelectorAll("h2"));
    setAllHeaders(all_headers);
    const options = {
      // root: null,
      rootMargin: "-100px",
      

      // threshold: 0,
    };
    const observer = new IntersectionObserver((entries, observer) => {
      console.log(entries);
      entries.forEach((entry, index) => {
        console.log(entry.target);
        if (entry.isIntersecting) {
          // after first render the entry array will contain only one elemnt
          // wich is the current observed elemnt
          // console.log(index,' yes')
          document
            .getElementById(`link_${entry.target.firstChild.id}`)
            .classList.add("bg-nav-border-gray");
        } else {
          // console.log(index,' no')
          try {
            document
              .getElementById(`link_${entry.target.firstChild.id}`)
              .classList.remove("bg-nav-border-gray");
          } catch (err) {
            // pass err
          }
        }
      });
    }, options);
    // observer.observe(all_headers[3].parentElement)
    all_headers.forEach((header) => observer.observe(header.parentElement));
  }, [pathName]);

  return (
    <div className="space-y-1 ">
      <h3 className="text-main-blue font-bold ">
        {tableTitle ? tableTitle : "contents"}
      </h3>
      <div className="pl-1 flex flex-col gap-1">
        {allHeaders.map((h2, index) => {
          return (
            <a
              id={"link_" + h2.id}
              key={index}
              href={"#" + h2.id}
              className="table_link text-main-blue transform hover:translate-x-1 transition-all text-sm font-medium rounded-md hover:bg-nav-border-gray  border-b px-1 py-2 "
            >
              {h2.textContent}
            </a>
          );
        })}
      </div>
      <div className="h-[2px] w-full bg-white rounded-xl "></div>
    </div>
  );
};

export default TableContent;
