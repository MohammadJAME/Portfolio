import Logo from "../../../components/Logo";
import MenuTrigger from "../../Menu/components/MenuTrigger";

const Header = () => {
  return (
    <div className="w-full h-full flex items-center justify-between relative z-50">
      <Logo />
      <div>
        <MenuTrigger />
      </div>
    </div>
  );
};

export default Header;
