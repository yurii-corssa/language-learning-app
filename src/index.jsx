import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle.styled";
import { AuthProvider } from "./contexts/AuthContext";
import ModalProvider from "./contexts/ModalContext";
import SidebarProvider from "./contexts/SidebarContext";
import ToastProvider from "./contexts/ToastContext";

const baseURL = import.meta.env.BASE_URL;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={baseURL}>
      <GlobalStyle />
      <AuthProvider>
        <ModalProvider>
          <SidebarProvider>
            <ToastProvider>
              <App />
            </ToastProvider>
          </SidebarProvider>
        </ModalProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
