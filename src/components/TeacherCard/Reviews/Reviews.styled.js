import styled from "styled-components";
import { breakpoints, colors } from "../../../styles/variables";

export const ReviewList = styled.ul`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${breakpoints.tablet - 1}px) {
    gap: 12px;
  }
  @media only screen and (min-width: ${breakpoints.tablet}px) {
    gap: 32px;
  }
`;

export const ReviewItem = styled.li`
  font-weight: 500;
  line-height: 24px;
`;

export const ReviewerName = styled.span`
  display: block;
  color: ${colors.semiTransparent(0.6)};
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
