import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./todoActionCreator";
export { addTodo, deleteTodo, editTodo } from "./todoActionCreator";

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.text);
    case EDIT_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return action.text;
        }
        return todo;
      });
    case DELETE_TODO:
      return state.filter((_, index) => index !== action.index);
    default:
      return state;
  }
};
