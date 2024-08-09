import styled from "styled-components";
import { breakpoints, colors } from "../../../../styles/variables";
import { motion } from "framer-motion";

export const ReviewList = styled(motion.ul)`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${breakpoints.tablet - 1}px) {
    gap: 12px;
  }
  @media only screen and (min-width: ${breakpoints.tablet}px) {
    gap: 32px;
  }
`;

export const ReviewItem = styled(motion.li)`
  font-weight: 500;
  line-height: 24px;
`;

export const ReviewerName = styled.span`
  display: block;
  color: ${colors.grey};
  margin-bottom: 2px;
`;

export const ReviewerRating = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 2px;

  @media only screen and (min-width: ${breakpoints.tablet}px) {
    margin-bottom: 16px;
  }

  svg {
    width: 16px;
    height: 16px;
    fill: ${colors.primary};
  }
`;
