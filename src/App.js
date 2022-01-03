import { store } from "./store";
import { addTodo, deleteTodo, editTodo } from "./store/todoActionCreator";
import "./App.css";

const App = ({ todo }) => {
  return (
    <div className="App">
      {todo.map((todo, index) => (
        <div key={todo}>
          {todo}
          <button onClick={() => store.dispatch(deleteTodo(index))}>X</button>
          <button
            onClick={() => {
              const text = window.prompt("Edit todo", todo);
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
    </div>
  );
};

export default App;
