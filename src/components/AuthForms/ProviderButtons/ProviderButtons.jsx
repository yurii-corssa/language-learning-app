import { facebookProvider, googleProvider } from "../../../firebaseApp";
import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";

const ProviderButtons = ({ onClose, isLoading, setIsLoading, setError }) => {
  const [isSubmittingGoogle, setIsSubmittingGoogle] = useState(false);
  const [isSubmittingFacebook, setIsSubmittingFacebook] = useState(false);
  const { signinWithProvider } = useAuth();

  const handleLogin = async (provider) => {
    setIsLoading(true);

    try {
      setError("authentication", {});
      await signinWithProvider(provider);
      setIsLoading(false);
      onClose();
    } catch {
      setError("authentication", {
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
    <div>
      <button type="button" onClick={onLoginWithGoogle} disabled={isLoading}>
        {isSubmittingGoogle ? "loading..." : "Google"}
      </button>
      <button type="button" onClick={onLoginWithFacebook} disabled={isLoading}>
        {isSubmittingFacebook ? "loading..." : "Facebook"}
      </button>
    </div>
  );
};

export default ProviderButtons;
