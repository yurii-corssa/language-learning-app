import styled from "styled-components";
import { colors } from "../../../styles/variables";

export const SummaryList = styled.ul`
  display: flex;
  gap: 32px;
`;

export const SummaryItem = styled.li`
  display: flex;
  align-items: center;
  font-weight: 500;
  line-height: 24px;

  svg {
    width: 16px;
    height: 16px;
    margin-right: 8px;
    ${({ $star }) => ($star ? `fill: ${colors.primary}` : "stroke: currentColor")}
  }

  &:not(:last-child)::after {
    content: "";
    position: relative;
    top: 0;
    right: -16px;
    width: 1px;
    height: 16px;
    background-color: ${colors.semiTransparent(0.2)};
  }
`;

export const Price = styled.span`
  margin-left: 0.25rem;
  color: ${colors.green};
`;
