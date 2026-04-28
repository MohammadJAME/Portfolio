import useMenuStore from "../../../store/useMenuStore";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { mainNavItems, secondaryNavItems } from "../data/navigationData";
import { useEffect } from "react";

const Menu = () => {
  const isOpen = useMenuStore((state) => state.isOpen);
  const setIsOpen = useMenuStore((state) => state.setIsOpen);

  const activeSection = useScrollSpy({
    sectionIds: mainNavItems.map((item) => item.id),
  });

  //Scroll Lock
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`bg-black w-full h-dvh fixed top-0 left-0 
        ${isOpen ? "visible opacity-100" : "invisible opacity-0"}
        transition-all duration-400 z-40 pt-12`}
    >
      <div
        className={`w-full h-full flex flex-col items-center justify-center gap-6 lg:gap-12
        ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"}
        transition-all duration-1000 delay-300`}
      >
        {/* Main Navigation */}
        <ul className="text-5xl lg:text-7xl font-bold flex flex-col items-center gap-4
          [&>li:hover]:text-stone-400
          [&>li]:transition-colors
          [&>li]:duration-300">
          {mainNavItems.map((item) => (
            <li
              key={item.id}
              className={
                activeSection === item.id
                  ? "text-stone-400"
                  : "text-white"
              }
            >
              <a href={`#${item.id}`} onClick={handleClick}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Secondary Links */}
        <ul className="flex gap-4 text-stone-400
          [&>li:hover]:text-white
          [&>li]:transition-colors
          [&>li]:duration-300">
          {secondaryNavItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={handleClick}
                className="flex flex-col items-center"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
