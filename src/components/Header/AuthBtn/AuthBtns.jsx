import { useAuth, useModal } from "../../../hooks";
import { LoginModal, RegistrationModal } from "../../Modals";
import { Button, SvgIcon } from "../../ui";
import { AuthBtnContainer } from "./AuthBtns.styled";

const AuthBtns = () => {
  const { user, signout } = useAuth();

  const { openModal, closeModal } = useModal();

  const handleLogin = () => {
    openModal(<LoginModal onClose={closeModal} />);
  };

  const handleRegistration = () => {
    openModal(<RegistrationModal onClose={closeModal} />);
  };

  const handleLogout = () => {
    signout();
  };

  return (
    <AuthBtnContainer>
      {!user ? (
        <>
          <Button variant="transparent" onClick={handleLogin}>
            <SvgIcon name="icon-log-in" width="20" height="20" />
            Log in
          </Button>

          <Button variant="black" onClick={handleRegistration}>
            Registration
          </Button>
        </>
      ) : (
        <Button variant="transparent" onClick={handleLogout}>
          <SvgIcon name="icon-log-out" width="20" height="20" />
          Log Out
        </Button>
      )}
    </AuthBtnContainer>
  );
};

export default AuthBtns;
