import { modalContent } from "../../../styles/variables";
import { Button } from "../../ui";
import AuthModal from "../AuthModal/AuthModal";
import ModalBody from "../SharedModal/ModalBody/ModalBody";
import PagePlaceholder from "../../PagePlaceholder/PagePlaceholder";
import { BtnWrapper } from "./AuthRequiredModal.styled";
import { routes } from "../../../helpers/routes";

const AuthRequiredModal = ({ openModal }) => {
  return (
    <ModalBody
      title={modalContent.authRequiredModal.title}
      text={modalContent.authRequiredModal.text}
    >
      <PagePlaceholder src={`${routes.BASE}/images/authentication.svg`} />
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
