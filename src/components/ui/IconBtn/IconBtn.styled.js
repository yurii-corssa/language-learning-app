import styled from "styled-components";

export const IconBtnStyled = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;

  svg {
    color: currentColor;
    transition: var(--transition);
  }

  &:hover,
  &:focus {
    svg {
      color: var(--primary);
    }
  }
`;
