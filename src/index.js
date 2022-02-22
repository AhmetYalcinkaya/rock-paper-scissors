import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.scss";
import { BrowserRouter } from "react-router-dom";

var mountNode = document.getElementById("app");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  mountNode
);
