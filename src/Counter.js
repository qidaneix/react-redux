import { useSelector, useDispatch } from "react-redux";
// import { decrement, addCount } from "./store/counter";
import { decrement, increment } from "./store/counter";

const Counter = () => {
  const value = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
