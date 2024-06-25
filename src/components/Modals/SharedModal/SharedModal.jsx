import { createPortal } from "react-dom";
import { modalScaleVariants } from "../../../styles/animations";
import { Button, SvgIcon } from "../../ui";
import { ModalCard } from "./SharedModal.styled";
import { useEffect } from "react";
import Backdrop from "../../Backdrop/Backdrop";
import { AnimatePresence } from "framer-motion";
import { useModal } from "../../../hooks";

const modalRoot = document.querySelector("#modal-root");

const SharedModal = () => {
  const { content, closeModal } = useModal();

  useEffect(() => {
    const handleCloseKeydown = (e) => {
      if (e.code === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleCloseKeydown);

    return () => {
      document.removeEventListener("keydown", handleCloseKeydown);
    };
  }, [closeModal]);

  return createPortal(
    <AnimatePresence>
      {content && (
        <>
          <Backdrop onClose={closeModal} />
          <ModalCard
            key={content.key}
            variants={modalScaleVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Button variant="x" onClick={closeModal}>
              <SvgIcon name="icon-x" />
            </Button>
            {content}
          </ModalCard>
        </>
      )}
    </AnimatePresence>,
    modalRoot
  );
};

export default SharedModal;
