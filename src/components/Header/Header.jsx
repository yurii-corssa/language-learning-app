import { useState } from "react";
import Modal from "../Modal/Modal";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import LoginForm from "../LoginForm/LoginForm";

const Header = () => {
  const [isModal, setIsModal] = useState(null);
  const openRegistrationModal = () => {
    setIsModal("registration");
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
          <button>Log in</button>
        </li>
        <li>
          <button type="button" onClick={openRegistrationModal}>
            Registration
          </button>
        </li>
      </ul>
      {isModal === "registration" && (
        <Modal>
          <RegistrationForm />
        </Modal>
      )}
      {isModal === "login" && (
        <Modal>
          <LoginForm />
        </Modal>
      )}
    </header>
  );
};

export default Header;
