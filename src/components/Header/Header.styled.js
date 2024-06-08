import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { breakpoints, colors, transitions } from "../../styles/variables";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;

  width: 100%;

  padding: 20px 40px;
  margin: 0 auto;
  background-color: ${colors.backgroundPage};

  @media only screen and (min-width: ${breakpoints.tablet}px) {
    width: 768px;
    padding: 30px 64px;
  }

  @media only screen and (min-width: ${breakpoints.desktop}px) {
    width: 1024px;
    padding: 20px 80px;
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 28px;
  width: 100%;

  a:first-child {
    margin-right: auto;
  }

  a:last-child {
    margin-right: auto;
  }
`;

export const HeaderLink = styled(NavLink)`
  line-height: 20px;
  transition: color ${transitions.default};

  &.active {
    color: ${colors.primary};
  }

  @media (hover: hover) {
    &:hover,
    &:focus {
      color: ${colors.primary};
    }
  }

  @media (hover: none) {
    &:active {
      color: ${colors.primary};
    }
  }
`;
