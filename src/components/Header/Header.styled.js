import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { breakpoints, colors, transitions } from "../../styles/variables";
import { motion } from "framer-motion";

export const HeaderContainer = styled(motion.header)`
  display: flex;
  align-items: center;

  width: 100%;
  height: 68px;

  padding: 20px 40px;
  margin: 0 auto;
  background-color: ${colors.backgroundPage};

  @media only screen and (min-width: ${breakpoints.tablet}px) {
    width: 704px;
    height: 88px;
    padding: 30px 64px;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
  }

  @media only screen and (min-width: ${breakpoints.desktop}px) {
    width: 1152px;
    padding: 20px 80px;
  }
`;

export const NavMenu = styled(motion.nav)`
  display: flex;
  align-items: center;
  gap: 28px;
  width: 100%;
  height: 100%;

  a:first-child {
    margin-right: auto;
  }

  a:last-child {
    margin-right: auto;
  }
`;

export const HeaderLink = styled(motion(NavLink))`
  align-content: center;
  height: 100%;
  line-height: 20px;
  transition: color ${transitions.default};

  &.active {
    color: ${colors.primary};
  }

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

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`;

export const UserName = styled.span`
  font-weight: 700;
  margin-bottom: 18px;
`;
