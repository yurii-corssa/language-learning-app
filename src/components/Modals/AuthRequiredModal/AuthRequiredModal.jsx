import { modalContent } from "../../../styles/variables";
import { Button } from "../../ui";
import ModalBody from "../ModalContainer/ModalBody/ModalBody";
import PagePlaceholder from "../../PagePlaceholder/PagePlaceholder";
import { BtnWrapper } from "./AuthRequiredModal.styled";
import AuthModal from "../AuthModal/AuthModal";

const baseURL = import.meta.env.BASE_URL;

const AuthRequiredModal = ({ openModal }) => {
  return (
    <ModalBody
      title={modalContent.authRequiredModal.title}
      text={modalContent.authRequiredModal.text}
    >
      <PagePlaceholder src={`${baseURL}images/authentication.svg`} />
      <BtnWrapper>
        <Button width="100%" onClick={() => openModal(<AuthModal key="login" type="login" />)}>
          Log in
        </Button>
        <Button
          width="100%"
          onClick={() => openModal(<AuthModal key="registration" type="registration" />)}
        >
          Registration
        </Button>
      </BtnWrapper>
    </ModalBody>
  );
};

export default AuthRequiredModal;
