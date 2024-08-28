import styled from "styled-components";
import { colors } from "../../styles/variables";

export const Notification = styled.p`
  text-align: center;
  font-weight: 500;
  max-width: 580px;
  color: ${colors.semiTransparent(0.3)};
`;

export const TeachersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex-grow: 1;
`;
