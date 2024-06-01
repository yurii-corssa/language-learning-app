import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors, transitions } from "../../styles/variables";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  padding: 20px 64px;
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

  &:hover,
  &:focus {
    color: ${colors.primary};
  }
`;
