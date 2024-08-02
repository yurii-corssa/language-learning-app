import styled from "styled-components";
import { colors, transitions } from "../../../styles/variables";
import { motion } from "framer-motion";

export const TextInputStyled = styled.input`
  width: 100%;
  color: currentColor;
  padding: 16px 18px;
  border-radius: 12px;
  border: 1px solid ${colors.semiTransparent(0.1)};
  margin: 2px;
  outline-color: transparent;
  transition: outline-color ${transitions.default};

  &::placeholder {
    color: ${colors.semiTransparent(0.3)};
  }

  &:focus {
    outline-color: ${colors.primary};
  }

  &:disabled {
    color: grey;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const ErrorMessage = styled(motion.small)`
  display: block;

  padding: 2px 8px;
  color: ${colors.red};
`;

export const VisibleBtn = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 20px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;

  svg {
    stroke: currentColor;
  }
`;
