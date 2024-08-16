import styled from "styled-components";
import { breakpoints, colors } from "../../../../styles/variables";

export const ModalBodyStyled = styled.div`
  overflow-y: auto;
  height: 100%;
  margin-right: -30px;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 5px;
    height: auto;
    background: ${colors.semiTransparent(0.1)};
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.semiTransparent(0.3)};
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${colors.semiTransparent(0.5)};
  }

  @media only screen and (max-width: ${breakpoints.tablet - 1}px) {
    padding: 32px;
  }
  @media only screen and (min-width: ${breakpoints.tablet}px) {
    margin-right: -55px;
    max-height: 80vh;
  }
`;

export const Content = styled.div`
  padding-right: 30px;

  @media only screen and (min-width: ${breakpoints.tablet}px) {
    padding-right: 55px;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 48px;
  margin-bottom: 20px;
`;

export const ModalText = styled.p`
  line-height: 22px;
  margin-bottom: 40px;
`;
