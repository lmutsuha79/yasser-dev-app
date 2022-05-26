const TableContent = ({ contentList, title, active }) => {
  console.log(active);
  return (
    <div className="space-y-1">
      <h3 className="text-main-blue font-bold ">
        {title ? title : "contents"}
      </h3>
      <ul className="pl-1 flex flex-col gap-[1px]">
        {contentList.map((item, index) => {
              console.log(item.title === active)
          return (
            <a
              className={`${
                active === (item.link || item.title) ? "bg-nav-border-gray" : ""
              } text-main-blue text-sm font-medium rounded-md hover:bg-nav-border-gray px-1 py-2 transition-colors `}
              href={item.link}
              key={index}
            >
              {item.title}
            </a>
          );
        })}
      </ul>
      <div className="h-[2px] w-full bg-nav-border-gray rounded-xl "></div>
    </div>
  );
};

export default TableContent;
