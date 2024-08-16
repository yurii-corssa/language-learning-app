import { modalScaleVariants } from "../../../styles/animations";
import { Button, SvgIcon } from "../../ui";
import { ModalCard } from "./ModalContainer.styled";
import { useEffect } from "react";
import Backdrop from "../../Backdrop/Backdrop";

const ModalContainer = ({ content, onClose }) => {
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
    <Backdrop onClose={onClose}>
      <ModalCard
        key={content.key}
        variants={modalScaleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Button variant="x" onClick={onClose}>
          <SvgIcon name="icon-x" />
        </Button>
        {content}
      </ModalCard>
    </Backdrop>
  );
};

export default ModalContainer;
