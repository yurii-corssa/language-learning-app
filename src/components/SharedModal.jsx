import { createPortal } from "react-dom";
import { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import LinearIndeterminate from "./ui/LinearIndeterminate/LinearIndeterminate";
import { useModal } from "../hooks";

const ModalContainer = lazy(() => import("./Modals/ModalContainer/ModalContainer"));

const SharedModal = () => {
  const { content, closeModal } = useModal();

  const modalRoot = document.querySelector("#modal-root");

  return createPortal(
    <Suspense fallback={<LinearIndeterminate />}>
      <AnimatePresence>
        {content && <ModalContainer content={content} onClose={closeModal} />}
      </AnimatePresence>
    </Suspense>,
    modalRoot
  );
};

export default SharedModal;
