import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoints, colors } from "../../../styles/variables";

export const StatsContainer = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 32px;
  padding: 40px;
  border-radius: 30px;
  border: 1.5px dashed ${colors.primary};

  @media only screen and (min-width: ${breakpoints.tablet}px) {
    grid-column-start: 1;
    grid-column-end: -1;
  }
`;

export const Stat = styled.div`
  display: flex;
  align-items: center;
  min-width: 120px;

  @media only screen and (max-width: ${breakpoints.desktop - 1}px) {
    flex-direction: column-reverse;
    gap: 8px;
  }

  @media only screen and (min-width: ${breakpoints.desktop}px) {
    flex-direction: row;
    gap: 16px;
  }
`;

export const Number = styled.p`
  font-size: 28px;
  font-weight: 500;
  line-height: 32px;
`;

export const Label = styled.p`
  color: ${colors.grey};
  font-size: 14px;
  line-height: 18px;

  @media only screen and (min-width: ${breakpoints.desktop}px) {
    width: 96px;
  }
`;
