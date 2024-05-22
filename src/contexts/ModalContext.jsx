import { createContext, useCallback, useState } from "react";
import { SharedModal } from "../components/Modals/";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState({ isOpen: false, content: null });

  const openModal = useCallback((content) => {
    setModal({ isOpen: true, content });
  }, []);

  const closeModal = useCallback(() => {
    setModal({ isOpen: false, content: null });
  }, []);

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
      {modal.isOpen && <SharedModal onClose={closeModal}>{modal.content}</SharedModal>}
    </ModalContext.Provider>
  );
};
