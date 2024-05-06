import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle.styled";
import { routes } from "./helpers/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={routes.BASE}>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
