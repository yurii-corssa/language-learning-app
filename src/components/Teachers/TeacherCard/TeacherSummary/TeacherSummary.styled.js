import styled from "styled-components";
import { breakpoints, colors } from "../../../../styles/variables";

export const SummaryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: fit-content;

  @media only screen and (max-width: ${breakpoints.desktop - 1}px) {
    column-gap: 18px;
  }
  @media only screen and (min-width: ${breakpoints.tablet}px) {
    grid-area: s;
  }
  @media only screen and (min-width: ${breakpoints.desktop}px) {
    column-gap: 32px;
  }
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

  @media only screen and (min-width: ${breakpoints.desktop}px) {
    &:not(:last-child)::after {
      content: "";
      position: relative;
      top: 0;
      right: -16px;
      width: 1px;
      height: 16px;
      background-color: ${colors.semiTransparent(0.2)};
    }
  }
`;

export const Price = styled.span`
  margin-left: 0.25rem;
  color: ${colors.green};
`;
