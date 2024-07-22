import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../../styles/variables";

export const PlaceholderWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 54px;

  svg {
    --primary: ${colors.primary};
  }
`;
