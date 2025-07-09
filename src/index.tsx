import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";

const root = document.getElementById("root");
ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);
