import { RegistrationForm } from "../../AuthForms";
import ModalBody from "../SharedModal/ModalBody/ModalBody";
import SharedModal from "../SharedModal/SharedModal";

const RegistrationModal = ({ onClose }) => {
  return (
    <SharedModal onClose={onClose}>
      <ModalBody
        title="Registration"
        text="Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"
      >
        <RegistrationForm onClose={onClose} />
      </ModalBody>
    </SharedModal>
  );
};

export default RegistrationModal;
