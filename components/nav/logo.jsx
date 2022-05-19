import Link from "next/link";

const Logo = ({ logoType }) => {

      function logo_type(type){
            if (type === "box") {
                  return (
                    <a className="border border-main-blue dark:border-white font-Architects_Daughter font-semibold text-lg">
                      <span className="text-main-blue dark:text-white">Yasser</span>
                      <span> </span>
                      <span className="text-white bg-main-blue dark:text-main-blue dark:bg-white px-1">Dev Blog</span>
                    </a>
                  );
            }
                  //     else
                  return (
                    <a className="text-main-blue dark:text-white font-Architects_Daughter font-semibold text-lg">
                      Yasser Dev Blog
                    </a>
                  );
      }
      function jiji(){
            return 'helllow'
      }

  return <Link href={"/blog"}>{logo_type(logoType)}</Link>;
};

export default Logo;
