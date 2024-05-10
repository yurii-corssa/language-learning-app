import { createPortal } from "react-dom";
import { ModalCard } from "./Modal.styled";
import { IconBtn } from "../ui";
import { LuX } from "react-icons/lu";
import { useEffect } from "react";
import Backdrop from "../Backdrop/Backdrop";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ onClose, children }) => {
  const handleClose = (e) => {
    if (e.target === e.currentTarget || e.code === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleClose);

    return () => {
      document.removeEventListener("keydown", handleClose);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <Backdrop onClick={handleClose}>
      <ModalCard>
        <IconBtn icon={LuX} onClick={onClose} />
        {children}
      </ModalCard>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
