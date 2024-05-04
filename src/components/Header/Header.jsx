import { useState } from "react";
import Modal from "../Modal/Modal";
import RegistrationForm from "../AuthForms/RegistrationForm/RegistrationForm";
import LoginForm from "../AuthForms/LoginForm/LoginForm";
import ModalBody from "../Modal/ModalBody/ModalBody";

const Header = () => {
  const [isModal, setIsModal] = useState(null);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">Logo</a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/teachers">Teachers</a>
          </li>
        </ul>
      </nav>
      <ul>
        <li>
          <button onClick={() => setIsModal("login")}>Log in</button>
        </li>
        <li>
          <button type="button" onClick={() => setIsModal("registration")}>
            Registration
          </button>
        </li>
      </ul>
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
    </header>
  );
};

export default Header;
