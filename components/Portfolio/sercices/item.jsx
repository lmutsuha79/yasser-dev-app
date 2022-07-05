import Image from "next/image";

const Item = ({ icon, title, desc }) => {
  return (
    <div className=" space-y-3 px-8 py-12 bg-white rounded-lg shadow-main-blue/5 hover:shadow-main-blue cursor-pointer transform md:hover:-translate-y-4 transition-all duration-300 ">
      {/* img container */}
      <div className="max-w-[60px]">
        <Image
          src={icon}
          alt={title + "_icon"}
          width={60}
          height={60}
          sizes={60}
        />
      </div>
      <h3 className="text-main-blue text-2xl font-semibold">{title}</h3>
      <p className="text-main-blue text-lg font-normal">{desc}</p>
    </div>
  );
};

export default Item;
