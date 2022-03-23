import AlertBtn from "./ui/alert-btn";
import DarkLigthModBtn from "./ui/drak-ligth-mode-btn";
import NavBtn from "./ui/nav-btn";

const NavBtns = () => {
  const profile_img =
    "https://media.istockphoto.com/photos/real-man-face-picture-id526372013?k=20&m=526372013&s=170667a&w=0&h=HX6BAYXi7MqOtAthKn0ciyq6LtQbGY7KtgkHsRIx7Nc=";
  return (
    <div className="flex space-x-2 items-center">
      <NavBtn>
        <DarkLigthModBtn />
      </NavBtn>

      <NavBtn>
        <AlertBtn />
      </NavBtn>

      <div
        className={`rounded-full h-[50px] w-[50px] overflow-hidden bg-cover bg-center cursor-pointer`}
        style={{ backgroundImage: `url(${profile_img})` }}
      ></div>
    </div>
  );
};

export default NavBtns;
