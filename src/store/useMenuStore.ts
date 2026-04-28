import { create } from "zustand";

type MenuStore = {
  isOpen: boolean
  setIsOpen: (state: boolean) => void
}

const useMenuStore = create<MenuStore>((set) => ({
  isOpen: false,
  setIsOpen: (state) => set({ isOpen: state }),
}));

export default useMenuStore;
