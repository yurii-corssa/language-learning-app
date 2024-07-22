import { motion } from "framer-motion";
import styled from "styled-components";

export const AppContainerStyled = styled(motion.div)`
  position: absolute;
  inset: 0;

  display: flex;
  flex-direction: column;
  overflow: auto;
`;
