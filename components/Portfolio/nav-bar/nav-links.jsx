import TextLink from "./text-link";
import Style from './style.module.css'

const NavLinks = () => {
  return (
      <div className={Style.textLinks + " " + "hidden sm:flex  space-x-4"}>
      <TextLink text='Work' />
      <TextLink text='About' />
      <TextLink text='Services' />
      <TextLink text='Contact' />
    </div>
  );
};

export default NavLinks;
