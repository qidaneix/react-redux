import { decrement, addCount } from "./store/counter";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const value = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => dispatch(addCount())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
