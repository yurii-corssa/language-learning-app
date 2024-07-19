import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/variables";

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

export const SkeletonElement = styled.div`
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
  border-radius: 12px;
`;
