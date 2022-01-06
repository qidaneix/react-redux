// import { INCREMENT, DECREMENT } from "./counterActionCreator";
// export { increment, decrement, addCount } from "./counterActionCreator";

// export const counterReducer = (state = 0, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return state + 1;
//     case DECREMENT:
//       return state - 1;
//     default:
//       return state;
//   }
// };

import { createSlice } from "@reduxjs/toolkit";
import { addCount } from "./counterActionCreator";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => {
      return state + 1;
    },
    decrement: (state) => {
      state -= 1;
      return state;
    },
  },
  extraReducers: {
    [addCount.fulfilled]: (state) => state + 1,
    [addCount.pending]: () => {
      console.log("pending");
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
