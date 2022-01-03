import React from "react";
import ReactDOM from "react-dom";
import { store } from "./store";
import "./index.css";
import App from "./App";
import Counter from "./Counter";
import reportWebVitals from "./reportWebVitals";

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App todo={store.getState().todo} />
      <Counter value={store.getState().counter} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

store.subscribe(render);
render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
