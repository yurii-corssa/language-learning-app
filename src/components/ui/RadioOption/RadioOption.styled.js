import styled from "styled-components";
import { colors, transitions } from "../../../styles/variables";

export const RadioLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  line-height: 24px;
  cursor: pointer;

  input[type="radio"]:checked + span {
    border-color: ${colors.primary};
  }

  input[type="radio"]:checked + span::before {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }

  input[type="radio"]:disabled + span {
    border-color: ${colors.semiTransparent(0.3)};
  }

  input[type="radio"]:disabled + span::before {
    background-color: ${colors.semiTransparent(0.3)};
  }

  ${({ disabled }) =>
    disabled &&
    `
    cursor: auto;
    color: ${colors.semiTransparent(0.5)};
  `}

  @media (hover: hover) {
    &:hover span {
      border-color: ${colors.primary};
    }
  }
`;

export const RadioOptionStyled = styled.input`
  display: none;
`;

export const Indicator = styled.span`
  position: relative;
  margin: 2px 10px 2px 2px;
  width: 20px;
  height: 20px;
  border: 2px solid ${colors.semiTransparent(0.3)};
  border-radius: 50%;
  transition: border-color ${transitions.default};

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(2);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${colors.primary};
    opacity: 0;
    transition: ${transitions.default};
    transition-property: opacity, transform;
  }
`;
