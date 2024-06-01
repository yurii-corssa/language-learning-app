import { ButtonStyled } from "./Button.styled";

const Button = ({ variant, width, onClick, children }) => {
  return (
    <ButtonStyled variant={variant} width={width} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
