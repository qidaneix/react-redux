// import { addCount as add } from "../api/addCount";

// export const INCREMENT = "加1";
// export const DECREMENT = "减1";

// export function increment() {
//   return {
//     type: INCREMENT,
//   };
// }

// export function decrement() {
//   return {
//     type: DECREMENT,
//   };
// }

// export function addCount() {
//   return (dispatch) => {
//     add().then(() => {
//       dispatch(increment());
//     });
//   };
// }

import { createAsyncThunk } from "@reduxjs/toolkit";
import { addCount as add } from "../api/addCount";

export const addCount = createAsyncThunk(
  "post/addCount",
  async () => await add()
);
