import styled, { css } from "styled-components";
import { colors, transitions } from "../../../styles/variables";

const buttonStyles = {
  black: css`
    background-color: ${colors.black};
    color: ${colors.white};
    padding: 14px 39px;

    @media (hover: hover) {
      &:hover,
      &:focus {
        background-color: ${colors.primary};
      }
    }
  `,

  transparent: css`
    background-color: transparent;
    color: ${colors.black};
    padding: 14px 0;

    svg {
      stroke: ${colors.primary};
    }

    &:hover {
      color: ${colors.primary};
    }
  `,

  primary: css`
    background-color: ${colors.primary};
    color: ${colors.black};
    padding: 16px 48px;
  `,

  icon: css`
    background-color: transparent;
    color: ${colors.black};

    svg {
      stroke: currentColor;
    }

    @media (hover: hover) {
      &:hover,
      &:focus {
        color: ${colors.primary};
      }
    }

    &:active {
      color: ${colors.primary};
    }
  `,

  x: css`
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: transparent;
    color: ${colors.black};

    svg {
      stroke: currentColor;
    }

    @media (hover: hover) {
      &:hover,
      &:focus {
        color: ${colors.primary};
      }
    }

    &:active {
      color: ${colors.primary};
    }
  `,
};

export const ButtonStyled = styled.button`
  font-weight: 700;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;

  transition-property: color, background-color;
  transition: ${transitions.default};

  svg {
    transition-property: stroke, fill;
    transition: ${transitions.default};
  }

  width: ${(props) => props.$width || "auto"};
  ${(props) => buttonStyles[props.$variant] || buttonStyles.primary}
`;
