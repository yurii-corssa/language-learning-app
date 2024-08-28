import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { Button, DotsLoader, SvgIcon } from "../../ui";
import { ProviderBtnWrapper } from "./ProviderButtons.styled";
import { useToast } from "../../../hooks";

const ProviderButtons = ({ onClose, isLoading, setIsLoading }) => {
  const [isSubmittingGoogle, setIsSubmittingGoogle] = useState(false);
  const { signinWithGoogleProvider } = useAuth();
  const { addToast } = useToast();

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      await signinWithGoogleProvider();
      setIsLoading(false);
      onClose();
    } catch {
      addToast.error("Authentication error, please try again");
      setIsLoading(false);
      setIsSubmittingGoogle(false);
    }
  };

  return (
    <ProviderBtnWrapper>
      <Button
        variant="provider"
        type="button"
        onClick={handleLogin}
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
    </ProviderBtnWrapper>
  );
};

export default ProviderButtons;
