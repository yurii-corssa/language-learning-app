import styled from "styled-components";
import { breakpoints, colors } from "../../styles/variables";
import { motion } from "framer-motion";

export const SectionContainerStyled = styled(motion.section)`
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  background-color: ${colors.backgroundPage};

  /* @media screen and (min-width: ${breakpoints.mobile}px) {
    width: 320px;
  } */

  @media only screen and (min-width: ${breakpoints.tablet}px) {
    width: 768px;
    padding: 0 32px;
  }

  @media only screen and (min-width: ${breakpoints.desktop}px) {
    width: 1024px;
    padding: 0 16px;
  }
`;
