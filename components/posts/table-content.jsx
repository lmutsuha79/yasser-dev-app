import { useEffect, useState } from "react";

const TableContent = ({ contentList, title, active }) => {
  const [allHeaders,setAllHeaders] = useState([]);
  useEffect(() =>{
    const all_headers = document.querySelectorAll('h2');
    setAllHeaders((curr) => {
      return [...all_headers].map(item => <a key={item.id} href={"#"+item.id} className={`text-main-blue text-sm font-medium rounded-md hover:bg-nav-border-gray px-1 py-2 transition-colors `}>{item.textContent}</a>)
    })





  },[]);
  return (
    
    <div className="space-y-1 sm:sticky top-[25%]">
      <h3 className="text-main-blue font-bold ">
        {title ? title : "contents"}
      </h3>
      <ul className="pl-1 flex flex-col gap-[1px]">
        
        {allHeaders}
     
      </ul>
      <div className="h-[2px] w-full bg-nav-border-gray rounded-xl "></div>
    </div>
  );
};

export default TableContent;
