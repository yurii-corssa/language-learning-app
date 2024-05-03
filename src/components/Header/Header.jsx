import { useState } from "react";
import Modal from "../Modal/Modal";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import LoginForm from "../LoginForm/LoginForm";

const Header = () => {
  const [isModal, setIsModal] = useState(null);

  const onClose = () => {
    setIsModal(null);
  };

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
        <Modal onClose={onClose}>
          <RegistrationForm />
        </Modal>
      )}
      {isModal === "login" && (
        <Modal onClose={() => setIsModal(null)}>
          <LoginForm />
        </Modal>
      )}
    </header>
  );
};

export default Header;
