import { useAuth, useModal } from "../../../hooks";
import { LoginModal, RegistrationModal } from "../../Modals";
import { Button, SvgIcon } from "../../ui";
import { AuthBtnContainer } from "./AuthBtns.styled";

const AuthBtns = ({ type, onCloseMobileMenu }) => {
  const { user, signout } = useAuth();

  const { openModal, closeModal } = useModal();

  const handleLogin = () => {
    if (typeof onCloseMobileMenu === "function") {
      onCloseMobileMenu();
    }
    openModal(<LoginModal onClose={closeModal} />);
  };

  const handleRegistration = () => {
    if (typeof onCloseMobileMenu === "function") {
      onCloseMobileMenu();
    }
    openModal(<RegistrationModal onClose={closeModal} />);
  };

  const handleLogout = async () => {
    if (typeof onCloseMobileMenu === "function") {
      onCloseMobileMenu();
    }
    signout();
  };

  return (
    <AuthBtnContainer $type={type}>
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
