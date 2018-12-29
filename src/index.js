// このファイルがエントリーポイント
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoApp from "./reducers";
import "./index.css";
import App from "./App";

// storeを作成する
// reducers/index.jsに定義されたreducerを引数にとる
const store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
