import styled from "styled-components";
import { breakpoints } from "../../../styles/variables";

export const BtnWrapper = styled.div`
  display: flex;
  gap: 18px;

  @media only screen and (max-width: ${breakpoints.desktop - 1}px) {
    flex-direction: column;
  }

  @media only screen and (min-width: ${breakpoints.desktop}px) {
    flex-direction: row;
  }
`;
