import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addCount as add } from "../api/addCount";

export const addCount = createAsyncThunk(
  "counter/add",
  async (number) => await add(number)
);

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => {
      state -= 1;
      // 基础类型值，直接改没用，还是需要返回值（引用类型可以直接改）
      return state;
    },
  },
  extraReducers: {
    [addCount.fulfilled]: (state, { payload }) => state + payload,
  },
});

export const { increment, decrement } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
