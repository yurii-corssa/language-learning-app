import { modalScaleVariants } from "../../../styles/animations";
import { Button, SvgIcon } from "../../ui";
import { ModalCard } from "./SharedModal.styled";
import { useEffect } from "react";

const SharedModal = ({ onClose, children }) => {
  useEffect(() => {
    const handleCloseKeydown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleCloseKeydown);

    return () => {
      document.removeEventListener("keydown", handleCloseKeydown);
    };
  }, [onClose]);

  return (
    <ModalCard variants={modalScaleVariants} initial="initial" animate="animate" exit="exit">
      <Button variant="x" onClick={onClose}>
        <SvgIcon name="icon-x" />
      </Button>
      {children}
    </ModalCard>
  );
};

export default SharedModal;
