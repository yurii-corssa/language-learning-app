import { LoginForm } from "../../AuthForms";
import ModalBody from "../SharedModal/ModalBody/ModalBody";
import SharedModal from "../SharedModal/SharedModal";

const LoginModal = ({ onClose }) => {
  return (
    <SharedModal onClose={onClose}>
      <ModalBody
        title="Log In"
        text="Welcome back! Please enter your credentials to access your account and continue your search for an teacher."
      >
        <LoginForm onClose={onClose} />
      </ModalBody>
    </SharedModal>
  );
};

export default LoginModal;
