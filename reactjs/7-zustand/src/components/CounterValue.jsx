import { useCounterStore } from "../store/counterStore";

function CounterValue() {
  const count = useCounterStore((state) => state.count); // Accessing only the count value
  return (
    <div>
      <h4>From_counter_value_component: {count}</h4>
    </div>
  );
}

export default CounterValue;
