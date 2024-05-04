import { BackdropStyled } from "./Backdrop.styled";

const Backdrop = ({ onClick, children }) => {
  return <BackdropStyled onClick={onClick}>{children}</BackdropStyled>;
};

export default Backdrop;
