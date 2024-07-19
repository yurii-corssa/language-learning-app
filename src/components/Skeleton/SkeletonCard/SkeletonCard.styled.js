import styled from "styled-components";
import { breakpoints } from "../../../styles/variables";
import { motion } from "framer-motion";
import { SkeletonElement } from "../Skeleton.styled";

export const SkeletonCardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 24px;

  @media only screen and (min-width: ${breakpoints.tablet}px) {
    gap: 32px;
  }
  @media only screen and (min-width: ${breakpoints.desktop}px) {
    flex-direction: row;
    gap: 48px;
  }
`;

export const SkeletonCardAvatar = styled(SkeletonElement)`
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  padding: 12px;
`;

export const SkeletonCardTextContainer = styled.div`
  width: 100%;
`;

export const SkeletonCardTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
  padding-top: 32px;
`;

export const SkeletonCardHeader = styled(SkeletonElement)`
  height: ${({ height }) => height || "20px"};
  width: 100%;
  max-width: ${({ width }) => width || "100%"};
  margin-bottom: 32px;
`;

export const SkeletonCardText = styled(SkeletonElement)`
  height: ${({ height }) => height || "20px"};
  width: 100%;
  max-width: ${({ width }) => width || "100%"};
  margin-bottom: 8px;
`;

export const SkeletonCardTag = styled(SkeletonElement)`
  height: 32px;
  width: ${({ width }) => width || "100%"};
  border-radius: 35px;
`;
