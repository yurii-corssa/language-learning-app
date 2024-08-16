import styled from "styled-components";
import { breakpoints, colors, transitions } from "../../../styles/variables";
import { ButtonStyled } from "../../ui/Button/Button.styled";
import { motion } from "framer-motion";

export const TeacherCardStyled = styled(motion.li)`
  position: relative;
  padding: 24px;
  background-color: ${colors.white};
  border-radius: 24px;
  scroll-margin-top: 50px;

  @media only screen and (max-width: ${breakpoints.tablet - 1}px) {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  @media only screen and (min-width: ${breakpoints.tablet}px) {
    display: grid;
    gap: 32px;

    @media (max-width: ${breakpoints.desktop - 1}px) {
      grid-template-columns: auto 1fr;
      grid-template-areas:
        "a n"
        "a s"
        "i i"
        "m m"
        "l l";
    }
  }

  @media only screen and (min-width: ${breakpoints.desktop}px) {
    scroll-margin-top: 40px;
    column-gap: 39px;
    grid-template-columns: auto 236px 1fr;
    grid-template-areas:
      "a n s"
      "a i i"
      ". m m"
      ". l l";
  }
`;

export const TeacherAvatar = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  padding: 12px;
  border: 3px solid ${colors.avatarBorder};
  border-radius: 50%;
  overflow: hidden;
  background: url(${import.meta.env.BASE_URL}images/user-round.svg) center center no-repeat;
  background-size: 60%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }

  &::after {
    content: "";
    position: absolute;
    top: 20px;
    right: 20px;
    width: 12px;
    height: 12px;
    background-color: ${({ $isOnline }) => ($isOnline ? colors.green : colors.red)};
    border-radius: 50%;
    border: 2px solid ${colors.white};
  }

  @media only screen and (min-width: ${breakpoints.tablet}px) {
    grid-area: a;
  }

  @media only screen and (min-width: ${breakpoints.desktop}px) {
    margin-right: 9px;
  }
`;

export const MoreWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: start;

  @media only screen and (max-width: ${breakpoints.tablet - 1}px) {
    gap: 16px;
  }
  @media only screen and (min-width: ${breakpoints.tablet}px) {
    margin-top: -16px;
    grid-area: m;
    gap: 32px;
  }
`;

export const TeacherName = styled.h2`
  font-weight: 500;
  line-height: 24px;
  margin-right: auto;

  @media only screen and (min-width: ${breakpoints.tablet}px) {
    align-self: end;
    grid-area: n;
  }
`;

export const HeartBtn = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 26px;
  height: 26px;
  color: ${({ $isFavorite }) => ($isFavorite ? colors.primary : "currentColor")};
  transition: ${transitions.default};
  transition-property: stroke, fill, color;
  cursor: pointer;

  & svg {
    stroke: currentColor;
    fill: ${({ $isFavorite }) => ($isFavorite ? "currentColor" : "transparent")};
  }
  background: none;
  border: none;

  @media (hover: hover) {
    &:hover {
      color: ${colors.primary};
    }
  }
  &:active {
    color: ${colors.darkPrimary};
  }
`;

export const Experience = styled(motion.p)`
  line-height: 24px;
`;

export const CardBtn = styled(ButtonStyled)`
  @media only screen and (min-width: ${breakpoints.tablet}px) {
    grid-column: 1 / 3;
  }
  @media only screen and (min-width: ${breakpoints.desktop}px) {
    grid-column: 2 / 3;
  }
`;
