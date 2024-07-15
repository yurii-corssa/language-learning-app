import { forwardRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { opacityVariants } from "../../../styles/animations";
import SvgIcon from "../SvgIcon";
import { ErrorMessage, InputWrapper, TextInputStyled, VisibleBtn } from "./TextInput.styled";

const TextInput = forwardRef(
  ({ type, placeholder, autoComplete, disabled, errorMessage, ...props }, ref) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };

    return (
      <InputWrapper>
        <TextInputStyled
          ref={ref}
          type={passwordVisible ? "text" : type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          disabled={disabled}
          $marginBottom={!errorMessage}
          {...props}
        />

        <AnimatePresence>
          {errorMessage && (
            <ErrorMessage
              variants={opacityVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {errorMessage}
            </ErrorMessage>
          )}
        </AnimatePresence>

        {type === "password" && (
          <VisibleBtn type="button" onClick={togglePasswordVisibility} disabled={disabled}>
            <SvgIcon name={`icon-eye${passwordVisible ? "" : "-off"}`} width="20px" height="20px" />
          </VisibleBtn>
        )}
      </InputWrapper>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
