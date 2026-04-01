import { create } from "zustand";

type TState = {
  activeId: number;
  setActiveId: (id: number) => void;
};

export const useCategory = create<TState>((set) => ({
  activeId: 1,
  setActiveId: (id: number) => set({ activeId: id }),
}));
