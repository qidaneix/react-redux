import { store } from "./store";
import { addTodo, deleteTodo, editTodo, getTodo } from "./store/todo";
import { useEffect } from "react";

const App = ({ todo }) => {
  useEffect(() => {
    store.dispatch(getTodo());
  }, []);

  return (
    <div className="App">
      {todo.list.map((item, index) => (
        <div key={item}>
          {item}
          <button onClick={() => store.dispatch(deleteTodo(index))}>X</button>
          <button
            onClick={() => {
              const text = window.prompt("Edit todo", item);
              store.dispatch(editTodo(index, text));
            }}
          >
            edit
          </button>
        </div>
      ))}
      <button onClick={() => store.dispatch(addTodo(Math.random().toString()))}>
        add todo
      </button>
      <div>loading: {String(todo.loading)}</div>
    </div>
  );
};

export default App;
