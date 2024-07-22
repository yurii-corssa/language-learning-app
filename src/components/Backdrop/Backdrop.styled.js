import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../styles/variables";

export const BackdropStyled = styled(motion.div)`
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${colors.backdrop};
`;
