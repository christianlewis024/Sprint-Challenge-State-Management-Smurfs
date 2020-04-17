import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleWare } from "redux";

ReactDOM.render(<App />, document.getElementById("root"));
