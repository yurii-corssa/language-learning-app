import styled from "styled-components";
import { transitions } from "../../../styles/variables";
import { buttonStyles } from "./buttonStyles.styled";

export const ButtonStyled = styled.button`
  font-weight: 700;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  transition: ${transitions.default};
  width: ${({ $width }) => $width || "auto"};
  ${({ $variant }) => buttonStyles[$variant] || buttonStyles.primary}

  &:disabled {
    cursor: default;
  }
`;
