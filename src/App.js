import { addTodo, deleteTodo, editTodo, getTodo } from "./store/todo";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo(Math.floor(Math.random() * 10)));
  }, []);

  return (
    <div className="App">
      {todo.list.map((item, index) => (
        <div key={item}>
          {item}
          <button onClick={() => dispatch(deleteTodo({ index }))}>X</button>
          <button
            onClick={() => {
              const text = window.prompt("Edit todo", item);
              dispatch(editTodo({ index, text }));
            }}
          >
            edit
          </button>
        </div>
      ))}
      <button
        onClick={() => dispatch(addTodo({ text: Math.random().toString() }))}
      >
        add todo
      </button>
      <div>loading: {String(todo.loading)}</div>
    </div>
  );
};

export default App;
