import { ButtonStyled } from "./Button.styled";

const Button = ({ type = "button", variant, width, onClick, children }) => {
  return (
    <ButtonStyled type={type} $variant={variant} $width={width} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
