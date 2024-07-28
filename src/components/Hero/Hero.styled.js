import styled from "styled-components";
import { breakpoints, colors } from "../../styles/variables";
import { motion } from "framer-motion";

export const HeroContainer = styled.div`
  display: grid;
  background-color: #f8f8f8;
  padding-top: 20px;
  gap: 24px;
  margin-bottom: 24px;

  @media only screen and (max-width: ${breakpoints.desktop - 1}px) {
    grid-template-columns: 100%;
  }
  @media only screen and (min-width: ${breakpoints.desktop}px) {
    grid-template-columns: 0.55fr 0.45fr;
  }
`;

export const ImageContainer = styled(motion.div)`
  grid-row-start: 1;
  grid-column-end: -1;

  position: relative;
  border-radius: 30px;
  background-color: ${colors.lightPrimary};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 12%;
  padding-bottom: 18%;

  @media only screen and (max-width: ${breakpoints.tablet - 1}px) {
    padding-top: 28%;
    padding-bottom: 26%;
  }
  @media only screen and (min-width: ${breakpoints.tablet}px) {
    padding-top: 12%;
    padding-bottom: 16.5%;
  }
  @media only screen and (min-width: ${breakpoints.desktop}px) {
    padding-top: 16%;
    padding-bottom: 11%;
  }
`;

export const Emoji = styled.img`
  aspect-ratio: 1 / 1;

  @media only screen and (max-width: ${breakpoints.tablet - 1}px) {
    width: 80%;
  }
  @media only screen and (min-width: ${breakpoints.tablet}px) {
    width: 50%;
  }
  @media only screen and (min-width: ${breakpoints.desktop}px) {
    width: 60%;
  }
`;

export const Mac = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  aspect-ratio: 2 / 1;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background: linear-gradient(
    180deg,
    ${colors.darkPrimary},
    color-mix(in srgb, ${colors.darkPrimary} 85%, black 15%) 100%
  );

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12%;
    aspect-ratio: 1 / 1;
    fill: color-mix(in sRGB, ${colors.darkPrimary} 30%, #ffffff 70%);
    mask-image: linear-gradient(rgb(0 0 0 / 100%), rgb(0 0 0 / 50%));
  }

  @media only screen and (max-width: ${breakpoints.tablet - 1}px) {
    width: 82%;
  }
  @media only screen and (min-width: ${breakpoints.tablet}px) {
    width: 52%;
  }
  @media only screen and (min-width: ${breakpoints.desktop}px) {
    width: 62%;
  }
`;
