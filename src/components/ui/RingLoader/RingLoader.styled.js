import styled from "styled-components";
import { colors } from "../../../styles/variables";

export const RingLoaderStyled = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${colors.primary};
  filter: drop-shadow(0px -2px 16px rgba(10, 37, 64, 0.35));
`;
