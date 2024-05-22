import { LoginForm } from "../../AuthForms";
import ModalBody from "../SharedModal/ModalBody/ModalBody";

const LoginModal = ({ onClose }) => {
  return (
    <ModalBody
      title="Log In"
      text="Welcome back! Please enter your credentials to access your account and continue your search for an teacher."
    >
      <LoginForm onClose={onClose} />
    </ModalBody>
  );
};

export default LoginModal;
