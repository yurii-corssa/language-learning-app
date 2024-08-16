import styled, { css, keyframes } from "styled-components";
import { colors } from "../../../styles/variables";

const primaryIndeterminateTranslate = keyframes`
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(.5, 0, .701732, .495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(.302435, .381352, .55, .956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
`;

const secondaryIndeterminateTranslate = keyframes`
  0% {
    animation-timing-function: cubic-bezier(.15, 0, .515058, .409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(.31033, .284058, .8, .733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(.4, .627035, .6, .902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
`;

const primaryIndeterminateScale = keyframes`
  0% {
    transform: scaleX(.04);
  }
  36.65% {
    animation-timing-function: cubic-bezier(.334731, .12482, .785844, 1);
    transform: scaleX(.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(.06, .11, .6, 1);
    transform: scaleX(.661479);
  }
  100% {
    transform: scaleX(.04);
  }
`;

const secondaryIndeterminateScale = keyframes`
  0% {
    animation-timing-function: cubic-bezier(.205028, .057051, .57661, .453971);
    transform: scaleX(.04);
  }
  19.15% {
    animation-timing-function: cubic-bezier(.152313, .196432, .648374, 1.004315);
    transform: scaleX(.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(.257759, -.003163, .211762, 1.38179);
    transform: scaleX(.72796);
  }
  100% {
    transform: scaleX(.04);
  }
`;

export const LinearProgressBase = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  color: ${colors.primary};
  overflow: hidden;
  transform: translateZ(0);
`;

export const Buffer = styled.div`
  position: absolute;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: ${colors.backgroundApp};
  transform-origin: top left;
`;

export const Bar = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: top left;

  ${({ $variant }) =>
    $variant === "primary"
      ? css`
          transform: scaleX(0);
          left: -145.166611%;
          animation: ${primaryIndeterminateTranslate} 2s infinite linear;

          span {
            animation: ${primaryIndeterminateScale} 2s infinite linear;
          }
        `
      : css`
          left: -54.888891%;
          animation: ${secondaryIndeterminateTranslate} 2s infinite linear;

          span {
            animation: ${secondaryIndeterminateScale} 2s infinite linear;
          }
        `}
`;

export const BarInner = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: currentColor;
`;
