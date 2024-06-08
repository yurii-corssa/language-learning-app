import { createContext, useCallback, useState } from "react";
import Backdrop from "../components/Backdrop/Backdrop";
import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";
import { SharedModal } from "../components/Modals";

export const ModalContext = createContext();
const modalRoot = document.querySelector("#modal-root");

export const ModalProvider = ({ children }) => {
  const [content, setContent] = useState(null);

  const openModal = useCallback((content) => {
    setContent(content);
  }, []);

  const closeModal = useCallback(() => {
    setContent(null);
  }, []);

  const contextValue = { openModal, closeModal };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      {createPortal(
        <AnimatePresence>
          {content && (
            <>
              <Backdrop onClose={closeModal} />
              <SharedModal onClose={closeModal}>{content}</SharedModal>
            </>
          )}
        </AnimatePresence>,
        modalRoot
      )}
    </ModalContext.Provider>
  );
};
