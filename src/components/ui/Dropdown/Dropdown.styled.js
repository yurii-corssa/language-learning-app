import styled from "styled-components";
import { motion } from "framer-motion";
import { colors, shadows, transitions } from "../../../styles/variables";

export const DropdownWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`;

export const Label = styled.label`
  font-size: 14px;
  line-height: 18px;
  color: ${colors.grey};
  padding-left: 8px;
`;

export const Select = styled.div`
  position: relative;
  padding: 14px 42px 14px 18px;
  min-width: ${({ $minWidth }) => $minWidth || "auto"};
  color: ${({ value }) => (value ? "currentColor" : colors.semiTransparent(0.5))};
  border: none;
  border-radius: 14px;
  background: white;
  cursor: pointer;
  ${({ $disabled }) =>
    $disabled ? { color: colors.semiTransparent(0.5), pointerEvents: "none" } : null}

  svg {
    --direction: ${({ $isOpen }) => ($isOpen ? "-180deg" : "0")};
    position: absolute;
    top: 50%;
    right: 13px;
    color: ${({ $disabled }) => ($disabled ? colors.semiTransparent(0.5) : colors.black)};
    transform: translate(0, -50%) rotate(var(--direction));
    pointer-events: none;
    transition: ${transitions.default};
    transition-property: transform color;
  }
  @media (hover: hover) {
    &:hover:not(:disabled) {
      svg {
        color: ${colors.primary};
      }
    }
  }
  &:active:not(:disabled) {
    svg {
      color: ${colors.darkPrimary};
    }
  }
`;

export const OptionsList = styled(motion.ul)`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  padding: 14px 0;
  border-radius: 12px;
  background-color: ${colors.white};
  box-shadow: ${shadows.dropdown};
  z-index: 2;
`;

export const Option = styled.li`
  color: ${({ $isSelected }) => ($isSelected ? colors.black : colors.semiTransparent(0.3))};
  padding: 4px 18px;
  transition: ${transitions.default};
  transition-property: color background-color;

  &:hover {
    color: currentColor;
    cursor: pointer;
    background-color: ${colors.semiTransparent(0.03)};
  }
`;
