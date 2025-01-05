import { create } from "zustand";

interface SidebarState {
  isOpen: boolean;
  toggle: () => void;
}

const useSidebarStateStore = create<SidebarState>((set) => ({
  isOpen: true,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useSidebarStateStore;
