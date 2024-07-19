import styled from "styled-components";
import { SkeletonElement } from "../Skeleton.styled";
import { motion } from "framer-motion";

export const SkeletonFilterContainer = styled(motion.div)`
  display: flex;
  gap: 20px;
  width: 100%;
  padding-top: 32px;
`;

export const SkeletonFilterInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: ${({ width }) => width || "100%"};
`;

export const SkeletonFilterInput = styled(SkeletonElement)`
  height: 48px;
  width: 100%;
`;

export const SkeletonFilterLabel = styled(SkeletonElement)`
  height: 18px;
  width: 70px;
`;
