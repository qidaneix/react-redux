import { addTodo, deleteTodo, editTodo, getTodo } from "./store/todo";
import { useEffect } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    todo: state.todo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTodo: () => dispatch(getTodo()),
    delete: (index) => dispatch(deleteTodo(index)),
    edit: (index, text) => dispatch(editTodo(index, text)),
    add: (text) => dispatch(addTodo(text)),
  };
};

const App = ({ todo, getTodo, delete: del, edit, add }) => {
  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div className="App">
      {todo.list.map((item, index) => (
        <div key={item}>
          {item}
          <button onClick={() => del(index)}>X</button>
          <button
            onClick={() => {
              const text = window.prompt("Edit todo", item);
              edit(index, text);
            }}
          >
            edit
          </button>
        </div>
      ))}
      <button onClick={() => add(Math.random().toString())}>add todo</button>
      <div>loading: {String(todo.loading)}</div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
