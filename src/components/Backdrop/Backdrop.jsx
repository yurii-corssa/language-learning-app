import { fadeVariants } from "../../styles/animations";
import { BackdropStyled } from "./Backdrop.styled";

const Backdrop = ({ onClose, children }) => {
  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <BackdropStyled
      variants={fadeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      onClick={handleClose}
    >
      {children}
    </BackdropStyled>
  );
};

export default Backdrop;
