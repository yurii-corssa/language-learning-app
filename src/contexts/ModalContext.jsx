import { createContext, useState } from "react";
import { RegistrationModal, LoginModal, AuthRequiredModal } from "../components/Modals/";
import { types } from "../helpers/modalTypes";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModal, setIsModal] = useState(null);

  const openModal = (nameModal) => {
    setIsModal(nameModal);
  };

  const closeModal = () => {
    setIsModal(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {isModal === types.SIGN_UP && <RegistrationModal onClose={closeModal} />}
      {isModal === types.SIGN_IN && <LoginModal onClose={closeModal} />}
      {isModal === types.AUTH_REQ && (
        <AuthRequiredModal onClose={closeModal} openModal={openModal} />
      )}
    </ModalContext.Provider>
  );
};
