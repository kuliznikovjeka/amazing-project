import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
// app
import { App, ThemeProvider } from "app";

const root = document.getElementById("root");
ReactDom.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  root
);
