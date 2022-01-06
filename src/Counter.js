import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, addCount } from "./store/counter";

const Counter = () => {
  const value = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => dispatch(increment())}> + </button>
      <button
        onClick={() => {
          const some = parseInt(window.prompt(), 10);
          dispatch(addCount(some));
        }}
      >
        + some
      </button>
      <button onClick={() => dispatch(decrement())}> - </button>
    </div>
  );
};

export default Counter;
