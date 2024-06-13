import styled from "styled-components";
import { colors, transitions } from "../../../styles/variables";
import { motion } from "framer-motion";

export const TextInputStyled = styled.input`
  width: 100%;
  color: currentColor;
  padding: 16px 18px;
  border-radius: 12px;
  border: 1px solid ${colors.semiTransparent(0.1)};
  margin: 1px;
  transition: border-color ${transitions.default};

  &::placeholder {
    color: ${colors.semiTransparent(0.3)};
  }

  &:focus {
    outline: inherit;
    margin: 0;
    border: 2px solid ${colors.primary};
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  padding-bottom: 18px;
`;

export const ErrorMessage = styled(motion.small)`
  display: block;

  padding: 2px 8px;
  color: ${colors.error};
`;

export const VisibleBtn = styled.div`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 20px;
  height: 20px;

  svg {
    stroke: currentColor;
  }
`;
