import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ children }) => {
  console.log(children);
  return createPortal(<div>{children}</div>, modalRoot);
};

export default Modal;
