import { ButtonStyled } from "./Button.styled";

const Button = ({ type = "button", disabled, variant, width, onClick, children }) => {
  return (
    <ButtonStyled
      type={type}
      disabled={disabled}
      $variant={variant}
      $width={width}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
