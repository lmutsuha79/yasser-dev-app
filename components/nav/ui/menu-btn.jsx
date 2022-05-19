import Image from "next/image";
import BtnContainer from "./btn-container";
import styles from './styles.module.css'

const MenuBtn = () => {
      return (
            <BtnContainer>
                  {/* <Image src={"/icons/nav_btn.svg"} width={25} height={25} /> */}
                  <div className="flex flex-col justify-center items-start w-[25px] h-[25px]">
                        <span className={`w-[20px] ${styles.navIconLine}`}></span>
                        <span className={`w-[15px] my-[3px] ${styles.navIconLine}`}></span>
                        <span className={`w-[10px] ${styles.navIconLine}`}></span>

                  </div>
            </BtnContainer>
                  

      
      );
}

export default MenuBtn;