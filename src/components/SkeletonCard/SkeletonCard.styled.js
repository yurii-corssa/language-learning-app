import styled, { keyframes } from "styled-components";
import { breakpoints, colors } from "../../styles/variables";
import { motion } from "framer-motion";

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

export const SkeletonContainer = styled(motion.div)`
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

const SkeletonElement = styled.div`
  border-radius: 35px;
  background-image: linear-gradient(
    90deg,
    ${colors.semiTransparent(0.03)} 25%,
    ${colors.semiTransparent(0.07)} 50%,
    ${colors.semiTransparent(0.03)} 75%
  );
  background-size: 800px 104px;
  position: relative;
  overflow: hidden;
  animation: ${shimmer} 1.2s infinite;
`;

export const SkeletonAvatar = styled(SkeletonElement)`
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  padding: 12px;
`;

export const SkeletonTextContainer = styled.div`
  width: 100%;
`;

export const SkeletonTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
  padding-top: 32px;
`;

export const SkeletonHeader = styled(SkeletonElement)`
  height: ${({ height }) => height || "20px"};
  width: 100%;
  max-width: ${({ width }) => width || "100%"};
  margin-bottom: 32px;
`;

export const SkeletonText = styled(SkeletonElement)`
  height: ${({ height }) => height || "20px"};
  width: 100%;
  max-width: ${({ width }) => width || "100%"};
  margin-bottom: 8px;
`;

export const SkeletonTag = styled(SkeletonElement)`
  height: 32px;
  width: ${({ width }) => width || "100%"};
`;
