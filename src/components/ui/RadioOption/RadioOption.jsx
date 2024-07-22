import { forwardRef } from "react";
import { Indicator, RadioLabel, RadioOptionStyled } from "./RadioOption.styled";

const RadioOption = forwardRef(({ id, name, value, label, disabled, ...props }, ref) => {
  return (
    <RadioLabel disabled={disabled}>
      <RadioOptionStyled
        ref={ref}
        type="radio"
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        {...props}
      />
      <Indicator tabIndex={disabled ? -1 : 0} />
      {label}
    </RadioLabel>
  );
});

RadioOption.displayName = "RadioOption";

export default RadioOption;
