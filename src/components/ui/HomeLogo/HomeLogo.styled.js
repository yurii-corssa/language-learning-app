import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors, transitions } from "../../../styles/variables";

export const LogoWrapper = styled(NavLink)`
  display: flex;
  gap: 8px;
  align-items: center;

  height: 100%;
  transition: color ${transitions.default};

  @media (hover: hover) {
    &:hover {
      color: ${colors.primary};
    }
  }

  @media (hover: none) {
    &:active {
      color: ${colors.primary};
    }
  }
`;

export const LogoText = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 24px;
  color: currentColor;
`;
