import styled from "styled-components";
import { colors, transitions } from "../../../styles/variables";
import { buttonStyles } from "./buttonStyles.styled";

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 700;
  color: currentColor;
  border: none;
  border-radius: 12px;
  margin: 2px;
  cursor: pointer;
  transition: ${transitions.default};
  width: ${({ $width }) => $width || "auto"};
  ${({ $variant }) => buttonStyles[$variant] || buttonStyles.primary}

  &:disabled {
    cursor: default;
    color: ${colors.grey};
    background-color: ${colors.semiTransparent(0.1)};
  }
`;
