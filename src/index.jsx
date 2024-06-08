import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle.styled";
import { routes } from "./helpers/routes";
import { AuthProvider } from "./contexts/AuthContext";
import ModalProvider from "./contexts/ModalContext";
import SidebarProvider from "./contexts/SidebarContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={routes.BASE}>
      <GlobalStyle />
      <AuthProvider>
        <ModalProvider>
          <SidebarProvider>
            <App />
          </SidebarProvider>
        </ModalProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
