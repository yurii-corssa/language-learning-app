import styled, { css } from "styled-components";

const buttonStyles = {
  black: css`
    background-color: var(--black);
    color: var(--white);
    padding: 14px 39px;

    &:hover {
      background-color: var(--primary);
    }
  `,

  transparent: css`
    background-color: transparent;
    color: var(--black);
    padding: 14px 0;

    svg {
      stroke: var(--primary);
    }

    &:hover {
      color: var(--primary);
    }
  `,

  primary: css`
    background-color: var(--primary);
    color: var(--black);
    padding: 16px 48px;
  `,
};

export const ButtonStyled = styled.button`
  font-weight: 700;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;

  transition-property: color, background-color;
  transition: var(--transition);

  svg {
    transition-property: stroke, fill;
    transition: var(--transition);
  }

  width: ${(props) => props.width || "auto"};
  ${(props) => buttonStyles[props.variant]}
`;
