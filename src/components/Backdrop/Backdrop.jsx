import { BackdropStyled } from "./Backdrop.styled";

const Backdrop = ({ onClose, children }) => {
  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return <BackdropStyled onClick={handleClose}>{children}</BackdropStyled>;
};

export default Backdrop;
