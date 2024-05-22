import { types } from "../../../helpers/modalTypes";
import ModalBody from "../SharedModal/ModalBody/ModalBody";
import SharedModal from "../SharedModal/SharedModal";

const AuthRequiredModal = ({ onClose, openModal }) => {
  return (
    <SharedModal onClose={onClose}>
      <ModalBody
        title="Authentication Required"
        text="You need to be logged in to access this feature."
      >
        <button onClick={() => openModal(types.SIGN_IN)}>Log in</button>
        <button onClick={() => openModal(types.SIGN_UP)}>Registration</button>
      </ModalBody>
    </SharedModal>
  );
};

export default AuthRequiredModal;
