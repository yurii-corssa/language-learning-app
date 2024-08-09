import styled from "styled-components";
import { breakpoints, colors, transitions } from "../../../../styles/variables";

export const DetailedList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media only screen and (min-width: ${breakpoints.tablet}px) {
    grid-area: i;
  }
`;

export const InfoText = styled.p`
  font-weight: 500;
  line-height: 24px;

  & > span {
    color: ${colors.grey};
  }
`;

export const Speak = styled.button`
  text-decoration: underline;
  color: ${({ $isSelected }) => ($isSelected ? colors.primary : "currentColor")};
  background: none;
  border: none;
  transition: color ${transitions.default};
  margin-right: 0.25rem;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      color: ${colors.primary};
    }
  }
  &:active {
    color: ${colors.darkPrimary};
  }
`;
