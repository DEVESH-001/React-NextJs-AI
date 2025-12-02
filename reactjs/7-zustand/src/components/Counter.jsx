import React from "react";
import { useCounterStore } from "../store/counterStore";

function Counter() {
  const { count, increase, decrease, reset } = useCounterStore();
  return (
    <div>
      <h2>Counter</h2>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>:^(</button>
    </div>
  );
}

export default Counter;
