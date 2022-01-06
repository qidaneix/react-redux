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
import { addCount as add } from "../api/addCount";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state, { payload }) => {
      if (typeof payload === "number") return state + payload;
      return state + 1;
    },
    decrement: (state) => {
      state -= 1;
      return state;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;

export function addCount(number) {
  return async (dispatch) => {
    const num = await add(number);
    dispatch(increment(num));
  };
}
