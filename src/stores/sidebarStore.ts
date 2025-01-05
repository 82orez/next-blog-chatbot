import { create } from "zustand";

interface SidebarState {
  isOpen: boolean;
  close: () => void;
}

const useSidebarStateStore = create<SidebarState>((set) => ({
  isOpen: true,
  close: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useSidebarStateStore;
