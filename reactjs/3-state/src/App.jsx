import { useState } from "react";
import "./App.css";

function App() {
  //here we will use the useState hook to manage the state of the counter [https://react.dev/reference/react/useState]
  const [count, setCount] = useState(0);
  const [countToSet, setCountToSet] = useState(0);
  return (
    <>
      <h1>Count is {count}</h1>

      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount((count) => Math.max(count - 1, 0))}>Decrement</button>
        <button onClick={() => setCount((count) => 0)}>Reset</button>
      </div>
      <div>
        <input
          type="text"
          value={countToSet}
          onChange={(e) => setCountToSet(Number(e.target.value))}
        />
        <button
          onClick={() => {
            setCount(Number(countToSet));
            setCountToSet(0);
          }}
        >
          Set to {countToSet}
        </button>
      </div>
    </>
  );
}

export default App;
