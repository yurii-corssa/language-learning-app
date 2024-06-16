import { motion } from "framer-motion";
import { styled } from "styled-components";
import { colors } from "../../../styles/variables";

export const ModalCard = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 64px;
  border-radius: 30px;
  background: ${colors.white};
  overflow: hidden;
`;
