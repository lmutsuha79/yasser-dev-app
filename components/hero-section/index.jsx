import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      <Image
        src={`https://images.unsplash.com/photo-1638913662252-70efce1e60a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`}
        objectFit="cover"
        layout="fill"
        alt="hero section image"
      />
      <div className="text_content space-y-[60px]">
        <h2 className="text-white text-8xl">I belive that</h2>
        <p className="text-white font-normal text-lg">
          The web means a culture of participation, so we believe in Totomina
          Blog that the information, no matter how simple, should not remain
          confined to certain people, but rather should be shared with others,
          thus elevating ourselves and the content of our dear Arabic language
          on the Internet.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
