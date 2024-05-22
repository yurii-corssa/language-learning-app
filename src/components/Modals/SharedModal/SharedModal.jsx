import { createPortal } from "react-dom";
import { ModalCard } from "./SharedModal.styled";
import { IconBtn } from "../../ui";
import { LuX } from "react-icons/lu";
import { useEffect } from "react";
import Backdrop from "../../Backdrop/Backdrop";

const modalRoot = document.querySelector("#modal-root");

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

  return createPortal(
    <Backdrop onClose={onClose}>
      <ModalCard>
        <IconBtn icon={LuX} onClick={onClose} />
        {children}
      </ModalCard>
    </Backdrop>,
    modalRoot
  );
};

export default SharedModal;
