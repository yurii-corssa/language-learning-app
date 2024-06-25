import { css } from "styled-components";
import { colors } from "../../../styles/variables";

export const buttonStyles = {
  black: css`
    background-color: ${colors.black};
    color: ${colors.white};
    padding: 14px 39px;

    @media (hover: hover) {
      &:hover {
        opacity: 0.85;
      }

      &:active {
        opacity: 1;
      }
    }
    @media (hover: none) {
      &:active {
        opacity: 0.5;
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
    @media (hover: hover) {
      &:hover {
        color: ${colors.primary};
      }
      &:active {
        opacity: 0.5;
      }
    }
    @media (hover: none) {
      &:active {
        color: ${colors.primary};
      }
    }
  `,

  primary: css`
    font-size: 1.125rem;
    line-height: 28px;
    background-color: ${colors.primary};
    padding: 16px 48px;

    @media (hover: hover) {
      &:hover {
        opacity: 0.85;
      }
    }
    &:active {
      opacity: 1;
      box-shadow: inset 0px 0px 50px 10px rgba(0, 0, 0, 0.1);
    }
  `,

  icon: css`
    background-color: transparent;
    color: ${colors.black};

    svg {
      stroke: currentColor;
    }
    @media (hover: hover) {
      &:hover {
        color: ${colors.primary};
      }
    }
    @media (hover: none) {
      &:active {
        color: ${colors.primary};
      }
    }
    &:active {
      opacity: 0.5;
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
      &:hover {
        color: ${colors.primary};
      }
    }
    @media (hover: none) {
      &:active {
        color: ${colors.primary};
      }
    }
    &:active {
      opacity: 0.5;
    }
  `,

  provider: css`
    gap: 12px;
    font-size: 1.125rem;
    line-height: 28px;
    background-color: ${colors.white};
    padding: 16px 48px;
    border: 2px solid ${colors.primary};

    svg {
      stroke: currentColor;
    }
    @media (hover: hover) {
      &:hover:not(:disabled) {
        color: ${colors.primary};
      }
    }
    &:active {
      box-shadow: inset 0px 0px 50px 10px rgba(0, 0, 0, 0.1);
    }
    @media (hover: none) {
      &:active {
        color: ${colors.primary};
      }
    }
  `,
};
