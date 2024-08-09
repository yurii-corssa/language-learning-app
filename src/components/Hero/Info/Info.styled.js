import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoints, colors } from "../../../styles/variables";
import { ButtonStyled } from "../../ui/Button/Button.styled";

export const InfoContainer = styled(motion.div)`
  background-color: ${colors.backgroundPage};
  padding: 98px 64px;
  border-radius: 30px;
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: 500;
  line-height: 56px;
  margin-bottom: 32px;
`;

export const Highlight = styled.span`
  position: relative;
  display: inline-block;
  font-weight: 400;
  font-style: italic;
  z-index: 1;
  &::before {
    content: "";
    top: 53%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    width: 180px;
    height: 35px;
    background-color: ${colors.lightPrimary};

    border-radius: 8px;
    z-index: -1;
  }
`;

export const Description = styled.p`
  line-height: 22px;
  margin-bottom: 64px;
`;

export const StartBtn = styled(ButtonStyled)`
  @media only screen and (max-width: ${breakpoints.tablet - 1}px) {
    width: 100%;
  }
  @media only screen and (min-width: ${breakpoints.tablet}px) {
    width: 267px;
  }
`;
