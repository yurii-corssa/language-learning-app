import styled from "styled-components";
import { breakpoints, colors, transitions } from "../../styles/variables";

export const FooterStyled = styled.footer`
  font-size: 14px;
  color: white;
  width: 100%;
  background-color: color-mix(in srgb, ${colors.darkPrimary} 80%, black 20%);
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 30px 60px;

  margin: 0 auto;

  @media only screen and (max-width: ${breakpoints.tablet - 1}px) {
    flex-wrap: wrap;
  }

  @media only screen and (min-width: ${breakpoints.tablet}px) {
    width: 768px;
  }

  @media only screen and (min-width: ${breakpoints.desktop}px) {
    width: 1216px;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 8px;

  @media only screen and (max-width: ${breakpoints.tablet - 1}px) {
  }
  @media only screen and (min-width: ${breakpoints.tablet}px) {
    max-width: 360px;
  }
  @media only screen and (min-width: ${breakpoints.desktop}px) {
    max-width: 600px;
  }
`;

export const FooterTitle = styled.h4`
  margin-bottom: 10px;
`;

export const FooterText = styled.p`
  display: block;
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const FooterLink = styled.a`
  color: ${colors.white};
  text-decoration: underline;
  transition: color ${transitions.default};

  svg {
    stroke: currentColor;
  }
  &:hover {
    color: ${colors.primary};
  }
`;
