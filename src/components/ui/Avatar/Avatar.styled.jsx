import styled from "styled-components";
import { colors } from "../../../styles/variables";

export const AvatarContainer = styled.div`
  width: 90px;
  aspect-ratio: 1 / 1;
  padding: 15px;
  border-radius: 50%;
  border: 2px solid ${colors.white};
  background-color: ${colors.primary};
  overflow: hidden;
`;

export const AvatarImage = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
