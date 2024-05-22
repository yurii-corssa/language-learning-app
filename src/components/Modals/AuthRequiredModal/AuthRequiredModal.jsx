import LoginModal from "../LoginModal/LoginModal";
import RegistrationModal from "../RegistrationModal/RegistrationModal";
import ModalBody from "../SharedModal/ModalBody/ModalBody";

const AuthRequiredModal = ({ closeModal, openModal }) => {
  return (
    <ModalBody
      title="Authentication Required"
      text="You need to be logged in to access this feature."
    >
      <button onClick={() => openModal(<LoginModal onClose={closeModal} />)}>Log in</button>
      <button onClick={() => openModal(<RegistrationModal onClose={closeModal} />)}>
        Registration
      </button>
    </ModalBody>
  );
};

export default AuthRequiredModal;
