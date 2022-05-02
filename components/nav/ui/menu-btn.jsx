import Image from "next/image";
import BtnContainer from "./btn-container";

const MenuBtn = () => {
      return (
            <BtnContainer>
                  <Image src={"/icons/nav_btn.svg"} width={25} height={25} />
            </BtnContainer>
                  

      
      );
}

export default MenuBtn;