import { lazy } from "react";
import { useAuth, useModal } from "../../../hooks";
import { headerChildVariants, menuChildrenVariants } from "../../../styles/animations";
import { Button, SvgIcon } from "../../ui";
import { AuthBtnContainer } from "./AuthBtns.styled";

const AuthModal = lazy(() => import("../../Modals/AuthModal/AuthModal"));

const AuthBtns = ({ type, onCloseMobileMenu }) => {
  const { user, signout } = useAuth();
  const { openModal } = useModal();

  const handleLogin = () => {
    if (typeof onCloseMobileMenu === "function") {
      onCloseMobileMenu();
    }
    openModal(<AuthModal key="login" type="login" />);
  };

  const handleRegistration = () => {
    if (typeof onCloseMobileMenu === "function") {
      onCloseMobileMenu();
    }
    openModal(<AuthModal key="registration" type="registration" />);
  };

  const handleLogout = async () => {
    if (typeof onCloseMobileMenu === "function") {
      onCloseMobileMenu();
    }
    signout();
  };

  return (
    <AuthBtnContainer
      $type={type}
      variants={type === "mobile" ? menuChildrenVariants : headerChildVariants}
    >
      {user ? (
        <Button variant="transparent" onClick={handleLogout}>
          <SvgIcon name="icon-log-out" width="20" height="20" />
          Log Out
        </Button>
      ) : (
        <Button variant="transparent" onClick={handleLogin}>
          <SvgIcon name="icon-log-in" width="20" height="20" />
          Log in
        </Button>
      )}
      {!user && (
        <Button variant="black" onClick={handleRegistration}>
          Registration
        </Button>
      )}
    </AuthBtnContainer>
  );
};

export default AuthBtns;
