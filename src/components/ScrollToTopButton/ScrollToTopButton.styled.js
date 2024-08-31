import { motion } from "framer-motion";
import styled from "styled-components";
import { ButtonStyled } from "../ui/Button/Button.styled";
import { breakpoints } from "../../styles/variables";

export const ScrollToTopButtonStyled = styled(motion(ButtonStyled))`
  position: fixed;
  bottom: 30px;
  right: 30px;
  border-radius: 50%;
  padding: 12px;

  svg {
    transform: rotate(180deg);
    color: white;
  }

  @media only screen {
    @media (min-width: ${breakpoints.tablet + 120}px) and (max-width: ${breakpoints.desktop}px) {
      right: calc((100vw - ${breakpoints.tablet}px) / 2 - 58px);
    }
  }

  @media only screen and (min-width: ${breakpoints.desktop + 120}px) {
    right: calc((100vw - ${breakpoints.desktop}px) / 2 - 58px);
  }
`;
