import { motion } from "framer-motion";
import styled from "styled-components";
import { colors, shadows } from "../../styles/variables";

export const MenuContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;

  width: 100vw;
  max-width: 448px;
  height: 100%;

  background-color: ${colors.backgroundPage};
  box-shadow: ${shadows.menu};
  overflow: hidden;
`;
