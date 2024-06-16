import { modalContent } from "../../../styles/variables";
import AuthModal from "../AuthModal/AuthModal";
import ModalBody from "../SharedModal/ModalBody/ModalBody";

const AuthRequiredModal = ({ openModal }) => {
  return (
    <ModalBody
      title={modalContent.authRequiredModal.title}
      text={modalContent.authRequiredModal.text}
    >
      <button onClick={() => openModal(<AuthModal type="login" />)}>Log in</button>
      <button onClick={() => openModal(<AuthModal type="registration" />)}>Registration</button>
    </ModalBody>
  );
};

export default AuthRequiredModal;
