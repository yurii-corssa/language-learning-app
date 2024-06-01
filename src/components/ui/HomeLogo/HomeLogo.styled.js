import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LogoWrapper = styled(NavLink)`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const LogoText = styled.span`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
`;
