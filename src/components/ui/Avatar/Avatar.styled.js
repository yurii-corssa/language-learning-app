import styled from "styled-components";
import { colors } from "../../../styles/variables";

export const AvatarContainer = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 90px;
  aspect-ratio: 1 / 1;
  padding: 15px;
  border-radius: 50%;
  border: 2px solid ${colors.white};
  background-color: ${colors.primary};
  overflow: hidden;
  background: url(${import.meta.env.BASE_URL}images/user-round.svg) center center no-repeat;
  background-size: 60%;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;
