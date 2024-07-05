import { css } from "styled-components";
import { colors } from "../../../styles/variables";

export const buttonStyles = {
  black: css`
    background-color: ${colors.black};
    color: ${colors.white};
    padding: 14px 39px;

    @media (hover: hover) {
      &:hover {
        background-color: color-mix(in srgb, ${colors.black}, ${colors.white} 20%);
      }
    }
    &:active {
      background-color: color-mix(in srgb, ${colors.black}, ${colors.primary} 80%);
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
    }
    &:active {
      color: color-mix(in srgb, ${colors.primary}, ${colors.black} 10%);
    }
  `,

  underline: css`
    font-weight: 500;
    line-height: 24px;
    text-decoration-line: underline;
    background-color: transparent;

    @media (hover: hover) {
      &:hover {
        color: ${colors.primary};
      }
    }
    &:active {
      color: color-mix(in srgb, ${colors.primary}, ${colors.black} 10%);
    }
  `,

  primary: css`
    font-size: 1.125rem;
    line-height: 28px;
    background-color: ${colors.primary};
    padding: 16px 48px;

    @media (hover: hover) {
      &:hover {
        background-color: color-mix(in srgb, ${colors.primary}, ${colors.white} 20%);
      }
    }
    &:active {
      background-color: color-mix(in srgb, ${colors.primary}, ${colors.black} 10%);
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
    &:active {
      color: color-mix(in srgb, ${colors.primary}, ${colors.black} 10%);
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
    &:active {
      color: color-mix(in srgb, ${colors.primary}, ${colors.black} 10%);
    }
  `,

  provider: css`
    gap: 12px;
    font-size: 1.125rem;
    line-height: 28px;
    background-color: ${colors.backgroundPage};
    padding: 16px 48px;
    border: 2px solid ${colors.primary};

    svg {
      stroke: currentColor;
    }

    @media (hover: hover) {
      &:hover:not(:disabled) {
        background-color: color-mix(in srgb, ${colors.backgroundPage}, ${colors.primary} 20%);
      }
    }
    &:active {
      background-color: ${colors.primary};
    }
  `,
};
