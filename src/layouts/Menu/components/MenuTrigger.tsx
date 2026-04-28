import { MenuIcon, X } from "lucide-react";
import useMenuStore from "../../../store/useMenuStore";

const MenuTrigger = () => {
  const isOpen = useMenuStore((state) => state.isOpen);
  const setIsOpen = useMenuStore((state) => state.setIsOpen);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      {/** Menu Trigger **/}
      <div
        onClick={toggleMenu}
        className={`h-10 ${isOpen ? "w-12" : "w-12 sm:w-24"} transition-all ease-out duration-1000 text-lg bg-[rgba(255,255,255,0.15)] backdrop-blur-xs rounded-lg flex items-center justify-center cursor-pointer`}
      >
        <MenuIcon
          className={`${isOpen ? "opacity-0" : "opacity-100"} absolute sm:invisible transition-opacity ease duration-500`}
          size={16}
        />
        <div
          className={`${isOpen ? "opacity-0" : "opacity-100"} absolute hidden sm:block transition-opacity ease duration-500 `}
        >
          Menu
        </div>
        <X
          className={`${isOpen ? "opacity-100" : "opacity-0"} absolute transition-opacity ease duration-500`}
          size={16}
        />
      </div>
    </div>
  );
};

export default MenuTrigger;
