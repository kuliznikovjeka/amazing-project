import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
// app
import { App } from "./app";
// shared
import { ThemeProvider } from "./shared/theme";

const root = document.getElementById("root");
ReactDom.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  root
);
