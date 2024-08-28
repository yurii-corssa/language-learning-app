import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoints, colors } from "../../styles/variables";

export const ToastContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
  pointer-events: none;
  z-index: 1;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media only screen and (max-width: ${breakpoints.tablet - 1}px) {
    padding: 26px 22px;
  }
  @media only screen and (min-width: ${breakpoints.tablet}px) {
    padding: 32px 48px;
  }
  @media only screen and (min-width: ${breakpoints.desktop}px) {
    padding: 32px 64px;
  }
`;

export const ToastCard = styled(motion.div)`
  position: relative;
  display: flex;
  gap: 16px;
  max-width: 400px;
  padding: 16px 20px;
  background-color: ${colors.white};
  border-radius: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  pointer-events: fill;

  button {
    position: relative;
    top: 0;
    right: 0;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-shrink: 0;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: ${({ $type }) => {
    switch ($type) {
      case "success":
        return colors.green;

      case "error":
        return colors.red;

      case "warning":
        return colors.orange;

      default:
        return colors.blue;
    }
  }};

  svg {
    fill: none;
    stroke: ${colors.backgroundPage};
  }
`;
