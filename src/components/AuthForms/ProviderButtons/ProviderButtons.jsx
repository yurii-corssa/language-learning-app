import { facebookProvider, googleProvider } from "../../../firebaseApp";
import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { Button, DotsLoader, SvgIcon } from "../../ui";
import { ProviderBtnWrapper } from "./ProviderButtons.styled";

const ProviderButtons = ({ onClose, isLoading, setIsLoading }) => {
  const [isSubmittingGoogle, setIsSubmittingGoogle] = useState(false);
  const [isSubmittingFacebook, setIsSubmittingFacebook] = useState(false);
  const { signinWithProvider } = useAuth();

  const setError = ({ message }) => {
    alert(message);
  };

  const handleLogin = async (provider) => {
    setIsLoading(true);

    try {
      await signinWithProvider(provider);
      setIsLoading(false);
      onClose();
    } catch {
      setError({
        message: "Authentication error, please try again",
      });
      setIsLoading(false);
      setIsSubmittingFacebook(false);
      setIsSubmittingGoogle(false);
    }
  };

  const onLoginWithGoogle = () => {
    setIsSubmittingGoogle(true);
    handleLogin(googleProvider);
  };

  const onLoginWithFacebook = () => {
    setIsSubmittingFacebook(true);
    handleLogin(facebookProvider);
  };

  return (
    <ProviderBtnWrapper>
      <Button
        variant="provider"
        type="button"
        onClick={onLoginWithGoogle}
        disabled={isLoading}
        width="100%"
      >
        {isSubmittingGoogle ? (
          <DotsLoader />
        ) : (
          <>
            <SvgIcon name="icon-google-logo" width="28" height="28" />
            <span>Google</span>
          </>
        )}
      </Button>

      <Button
        variant="provider"
        type="button"
        onClick={onLoginWithFacebook}
        disabled={isLoading}
        width="100%"
      >
        {isSubmittingFacebook ? (
          <DotsLoader />
        ) : (
          <>
            <SvgIcon name="icon-facebook-logo" width="28" height="28" />
            <span>Facebook</span>
          </>
        )}
      </Button>
    </ProviderBtnWrapper>
  );
};

export default ProviderButtons;
