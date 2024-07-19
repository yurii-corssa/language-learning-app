import styled from "styled-components";
import { breakpoints } from "../../styles/variables";
import { motion } from "framer-motion";

export const SectionContainerStyled = styled(motion.section)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  @media only screen and (min-width: ${breakpoints.tablet}px) {
    width: 768px;
    padding: 0 32px;
  }

  @media only screen and (min-width: ${breakpoints.desktop}px) {
    width: 1216px;
  }
`;
