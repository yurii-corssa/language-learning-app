import { useAuth, useModal } from "../../../hooks";
import { AuthModal } from "../../Modals";
import { Button, SvgIcon } from "../../ui";
import { AuthBtnContainer } from "./AuthBtns.styled";

const AuthBtns = ({ type, onCloseMobileMenu }) => {
  const { user, signout } = useAuth();
  const { openModal } = useModal();

  const handleLogin = () => {
    if (typeof onCloseMobileMenu === "function") {
      onCloseMobileMenu();
    }
    openModal(<AuthModal type="login" />);
  };

  const handleRegistration = () => {
    if (typeof onCloseMobileMenu === "function") {
      onCloseMobileMenu();
    }
    openModal(<AuthModal type="registration" />);
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
