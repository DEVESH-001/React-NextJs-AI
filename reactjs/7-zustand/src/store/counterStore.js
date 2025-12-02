import { create } from "zustand";

export const useCounterStore = create((set) => ({
  //here we will declare our variables and functions
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
