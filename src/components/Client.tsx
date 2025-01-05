"use client";

import useCounterStore from "@/stores/counterStore";

export default function Client() {
  const { count } = useCounterStore();
  return (
    <div>
      <div>Client</div>
      <h1 className="text-3xl font-bold">Zustand Counter</h1>
      <p className="mt-4 text-xl">Count: {count}</p>
    </div>
  );
}
