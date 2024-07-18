import styled from "styled-components";
import { breakpoints, transitions } from "../../styles/variables";
import { motion } from "framer-motion";
import { ButtonStyled } from "../ui/Button/Button.styled";

export const FilterFormStyled = styled.div`
  width: 100%;
  padding-top: 32px;

  @media only screen and (min-width: ${breakpoints.tablet}px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: end;
  }
`;

export const DropdownsWrapper = styled(motion.div)`
  display: flex;
  gap: 20px;

  @media only screen and (max-width: ${breakpoints.tablet - 1}px) {
    flex-direction: column;
  }
  @media only screen and (min-width: ${breakpoints.tablet}px) {
    flex-direction: row;
    min-height: 74px;
  }
`;

export const FilterBtnWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 0 24px;

  @media only screen and (max-width: ${breakpoints.tablet - 1}px) {
    justify-content: end;
  }
  @media only screen and (min-width: ${breakpoints.tablet}px) {
    height: 48px;
    justify-content: start;
  }
`;

export const FilterBtn = styled(ButtonStyled)`
  --direction: ${({ $showFilter }) => ($showFilter ? "-180deg" : "0")};
  ${(props) => ({ ...props })}

  svg {
    transform: rotate(var(--direction));
    transition: ${transitions.default};
    transition-property: transform;
  }
`;
