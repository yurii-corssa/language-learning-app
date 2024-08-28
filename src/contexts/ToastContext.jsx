import { nanoid } from "nanoid";
import { createContext, useMemo, useState } from "react";

export const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const createToast = (type, message, duration = 3000) => {
    const id = nanoid();
    setToasts((prevToasts) => [...prevToasts, { id, type, message, duration }]);
  };

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const contextValue = {
    toasts,
    removeToast,
    addToast: useMemo(
      () => ({
        success: (message, duration) => createToast("success", message, duration),
        error: (message, duration) => createToast("error", message, duration),
        warning: (message, duration) => createToast("warning", message, duration),
        info: (message, duration) => createToast("info", message, duration),
      }),
      []
    ),
  };

  return <ToastContext.Provider value={contextValue}>{children}</ToastContext.Provider>;
};

export default ToastProvider;
