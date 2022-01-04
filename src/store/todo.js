import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
} from "./todoActionCreator";
export { addTodo, deleteTodo, editTodo, getTodo } from "./todoActionCreator";

export const todoReducer = (state = { list: [], loading: false }, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, list: [...state.list, action.text] };
    case EDIT_TODO:
      return {
        ...state,
        list: state.list.map((todo, index) => {
          if (index === action.index) {
            return action.text;
          }
          return todo;
        }),
      };
    case DELETE_TODO:
      return {
        ...state,
        list: state.list.filter((_, index) => index !== action.index),
      };
    case GET_TODO_REQUEST:
      return { ...state, loading: true };
    case GET_TODO_SUCCESS:
      return { ...state, list: action.list, loading: false };
    default:
      return state;
  }
};
