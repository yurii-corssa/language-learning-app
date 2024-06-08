import styled from "styled-components";

export const AuthBtnContainer = styled.div`
  display: flex;
  flex-direction: ${({ $type }) => ($type === "mobile" ? "column" : "row")};
  justify-content: end;
  gap: 16px;
  flex-shrink: 0;
`;
