import { useToast } from "../hooks";
import { createPortal } from "react-dom";
import ToastNotification from "./ToastNotification/ToastNotification";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "./ToastNotification/ToastNotification.styled";

const SharedToasts = () => {
  const { toasts, removeToast } = useToast();

  const modalRoot = document.querySelector("#toast-root");

  return createPortal(
    <ToastContainer>
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastNotification
            key={toast.id}
            id={toast.id}
            type={toast.type}
            message={toast.message}
            duration={toast.duration}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </AnimatePresence>
    </ToastContainer>,
    modalRoot
  );
};

export default SharedToasts;
