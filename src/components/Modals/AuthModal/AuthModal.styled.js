import styled from "styled-components";
import { colors } from "../../../styles/variables";

export const AuthPromt = styled.p`
  font-size: 0.875rem;
  padding: 0 18px;
  margin-bottom: 18px;
  span {
    color: ${colors.primary};
    cursor: pointer;
  }
`;

export const DividerWrapper = styled.div`
  display: flex;
  text-transform: uppercase;
  padding: 0 18px;
  align-items: center;
  margin-bottom: 18px;

  &::before {
    content: "";
    border-bottom: 1px solid ${colors.semiTransparent(0.2)};
    flex: 1 0 auto;
    height: 1px;
    margin: 0;
  }

  &::after {
    content: "";
    border-bottom: 1px solid ${colors.semiTransparent(0.2)};
    flex: 1 0 auto;
    height: 1px;
    margin: 0;
  }
`;

export const Divider = styled.span`
  font-size: 0.875rem;
  text-align: center;
  flex: 0.2 0 auto;
`;

export const ModalBackdrop = styled.div`
  position: absolute;
  inset: 0;
  background-color: ${colors.semiTransparent(0.1)};
`;
