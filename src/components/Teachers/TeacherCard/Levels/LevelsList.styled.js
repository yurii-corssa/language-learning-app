import styled from "styled-components";
import { breakpoints } from "../../../../styles/variables";

export const LevelsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media only screen and (min-width: ${breakpoints.tablet}px) {
    grid-area: l;
  }
`;
