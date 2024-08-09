import styled from "styled-components";
import { colors, transitions } from "../../../styles/variables";

export const LevelLabelStyled = styled.li`
  height: 32px;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  padding: 8px 12px;
  border-radius: 35px;
  border: 1px solid ${colors.semiTransparent(0.2)};
  border-color: ${({ $isSelected }) =>
    $isSelected ? colors.primary : colors.semiTransparent(0.2)};
  background-color: ${({ $isSelected }) => ($isSelected ? colors.primary : "transparent")};
  transition: ${transitions.default};
  transition-property: background-color, border-color;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      border-color: ${colors.primary};
      background-color: ${colors.primary};
    }
  }
  &:active {
    border-color: ${colors.darkPrimary};
    background-color: ${colors.darkPrimary};
  }
`;
