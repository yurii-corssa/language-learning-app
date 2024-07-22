import { Content, ModalBodyStyled, ModalText, ModalTitle } from "./ModalBody.styled";

const ModalBody = ({ title, text, children }) => {
  return (
    <ModalBodyStyled>
      <Content>
        {title && <ModalTitle>{title}</ModalTitle>}
        {text && <ModalText>{text}</ModalText>}
        {children}
      </Content>
    </ModalBodyStyled>
  );
};

export default ModalBody;
