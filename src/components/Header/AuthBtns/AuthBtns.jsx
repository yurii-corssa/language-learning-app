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
      key={!user ? "isLogout" : "isLogin"}
      initial={{ opacity: 0, y: "-50%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "50%" }}
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
