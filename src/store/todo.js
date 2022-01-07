import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTodo as fetchTodo } from "../api/getTodo";

export const getTodo = createAsyncThunk("todo/get", (number) =>
  fetchTodo(number)
);

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTodo.fulfilled, (state, { payload }) => {
        state.list.push(...payload);
        state.loading = false;
      });
  },
});

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
