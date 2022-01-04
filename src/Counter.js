import { decrement, addCount } from "./store/counter";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    value: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch(addCount()),
    minus: () => dispatch(decrement()),
  };
};

const Counter = ({ value, add, minus }) => (
  <div>
    <h1>{value}</h1>
    <button onClick={() => add()}>+</button>
    <button onClick={() => minus()}>-</button>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
