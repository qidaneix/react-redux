import { combineReducers, applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import { counterReducer as counter } from "./counter";
import { todoReducer as todo } from "./todo";

const logger = createLogger();

const reducer = combineReducers({
  counter,
  todo,
});

export const store = createStore(reducer, applyMiddleware(logger));
