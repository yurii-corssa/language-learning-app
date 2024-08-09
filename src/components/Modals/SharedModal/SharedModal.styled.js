import { motion } from "framer-motion";
import { styled } from "styled-components";
import { breakpoints, colors } from "../../../styles/variables";

export const ModalCard = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  background: ${colors.white};
  overflow: hidden;

  @media only screen and (max-width: ${breakpoints.tablet - 1}px) {
    width: 100%;
    height: 100%;
  }
  @media only screen and (min-width: ${breakpoints.tablet}px) {
    width: 566px;
    height: auto;
    padding: 64px;
    border-radius: 30px;
  }
`;
