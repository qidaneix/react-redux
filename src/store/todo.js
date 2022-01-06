// import {
//   ADD_TODO,
//   DELETE_TODO,
//   EDIT_TODO,
//   GET_TODO_REQUEST,
//   GET_TODO_SUCCESS,
// } from "./todoActionCreator";
// export { addTodo, deleteTodo, editTodo, getTodo } from "./todoActionCreator";

// export const todoReducer = (state = { list: [], loading: false }, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return { ...state, list: [...state.list, action.text] };
//     case EDIT_TODO:
//       return {
//         ...state,
//         list: state.list.map((todo, index) => {
//           if (index === action.index) {
//             return action.text;
//           }
//           return todo;
//         }),
//       };
//     case DELETE_TODO:
//       return {
//         ...state,
//         list: state.list.filter((_, index) => index !== action.index),
//       };
//     case GET_TODO_REQUEST:
//       return { ...state, loading: true };
//     case GET_TODO_SUCCESS:
//       return { ...state, list: action.list, loading: false };
//     default:
//       return state;
//   }
// };

import { createSlice } from "@reduxjs/toolkit";
import { getTodo as fetchTodo } from "../api/getTodo";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    addTodo: (state, { payload }) => {
      state.list.push(payload.text);
    },
    editTodo: (state, { payload }) => {
      state.list[payload.index] = payload.text;
    },
    deleteTodo: (state, { payload }) => {
      state.list.splice(payload.index, 1);
    },
    getTodoRequest: (state) => {
      state.loading = true;
    },
    getTodoSuccess: (state, { payload }) => {
      state.list.push(...payload.list);
      state.loading = false;
    },
  },
});

export const { addTodo, editTodo, deleteTodo, getTodoRequest, getTodoSuccess } =
  todoSlice.actions;
export const todoReducer = todoSlice.reducer;

export function getTodo(nums) {
  return async (dispatch) => {
    dispatch(getTodoRequest());
    const list = await fetchTodo(nums);
    dispatch(getTodoSuccess({ list }));
  };
}
