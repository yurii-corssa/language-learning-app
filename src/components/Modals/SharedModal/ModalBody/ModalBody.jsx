import { ModalText, ModalTitle } from "./ModalBody.styled";

const ModalBody = ({ title, text, children }) => {
  return (
    <div>
      {title && <ModalTitle>{title}</ModalTitle>}
      {text && <ModalText>{text}</ModalText>}
      {children}
    </div>
  );
};

export default ModalBody;
