import styled, { css } from "styled-components";

export const isLitStyles = css`
  background-color: #00bcd4;
`;

export const notLitStyles = css`
  background-color: #263238;
`;

const getLightStyels = ({ isLit }) => {
  return isLit ? isLitStyles : notLitStyles;
};

export const StyledCell = styled.td`
  height: 100px;
  width: 100px;
  border-radius: 1px;
  transition: all 0.7s ease;
  cursor: pointer;
  ${getLightStyels}
  &:hover {
    transform: scale(0.95);
  }
`;
