import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { counterReducer as counter } from "./counter";
import { todoReducer as todo } from "./todo";

const logger = createLogger();

export const store = configureStore({
  reducer: { counter, todo },
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware();
    return middleware.concat(logger);
  },
});
