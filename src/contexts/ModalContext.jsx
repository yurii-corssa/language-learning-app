import { createContext, useContext, useState } from "react";
import { Modal, ModalBody } from "../components/Modal";
import { LoginForm, RegistrationForm } from "../components/AuthForms";

const ModalContext = createContext();

export const useModal = () => {
  return useContext(ModalContext);
};

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

      {isModal === "registration" && (
        <Modal onClose={() => setIsModal(null)}>
          <ModalBody
            title="Registration"
            text="Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"
          >
            <RegistrationForm onClose={() => setIsModal(null)} />
          </ModalBody>
        </Modal>
      )}

      {isModal === "login" && (
        <Modal onClose={() => setIsModal(null)}>
          <ModalBody
            title="Log In"
            text="Welcome back! Please enter your credentials to access your account and continue your search for an teacher."
          >
            <LoginForm onClose={() => setIsModal(null)} />
          </ModalBody>
        </Modal>
      )}

      {isModal === "authRequired" && (
        <Modal onClose={() => setIsModal(null)}>
          <ModalBody
            title="Authentication Required"
            text="You need to be logged in to access this feature."
          >
            <button onClick={() => openModal("login")}>Log in</button>
            <button onClick={() => openModal("registration")}>Registration</button>
          </ModalBody>
        </Modal>
      )}
    </ModalContext.Provider>
  );
};
