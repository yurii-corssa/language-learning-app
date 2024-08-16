import { useState } from "react";
import { LoginForm, ProviderButtons, RegistrationForm } from "../../AuthForms";
import ModalBody from "../ModalContainer/ModalBody/ModalBody";
import { useModal } from "../../../hooks";
import { modalContent } from "../../../styles/variables";
import { RingLoader } from "../../ui";
import { AuthPromt, Divider, DividerWrapper, ModalBackdrop } from "./AuthModal.styled";

const AuthModal = ({ type }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { openModal, closeModal } = useModal();

  const handleChangeModal = async () => {
    const targetType = type === "login" ? "registration" : "login";
    openModal(<AuthModal key={targetType} type={targetType} />);
  };

  return (
    <ModalBody title={modalContent[type]?.title} text={modalContent[type]?.text}>
      {type === "login" ? (
        <LoginForm isLoading={isLoading} setIsLoading={setIsLoading} closeModal={closeModal} />
      ) : (
        <RegistrationForm
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          closeModal={closeModal}
        />
      )}

      <AuthPromt>
        {type === "login" ? "Don't have an account? " : "Already have an account? "}
        <span onClick={handleChangeModal}>{type === "login" ? "Sign Up" : "Sign In"}</span>
      </AuthPromt>

      <DividerWrapper>
        <Divider>or</Divider>
      </DividerWrapper>

      <ProviderButtons onClose={closeModal} isLoading={isLoading} setIsLoading={setIsLoading} />

      {isLoading && (
        <ModalBackdrop>
          <RingLoader width="65" height="65" />
        </ModalBackdrop>
      )}
    </ModalBody>
  );
};

export default AuthModal;
