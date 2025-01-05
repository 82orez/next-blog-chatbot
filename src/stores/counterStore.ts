import { create } from "zustand";

// 상태의 type 정의를 위한 interface 정의
interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// Zustand store 생성
const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCounterStore;
