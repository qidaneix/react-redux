import { store } from "./store";
import { increment, decrement } from "./store/counter";

const Counter = ({ value }) => (
  <div>
    <h1>{value}</h1>
    <button onClick={() => store.dispatch(increment())}>+</button>
    <button onClick={() => store.dispatch(decrement())}>-</button>
  </div>
);

export default Counter;
