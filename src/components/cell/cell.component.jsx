import React from "react";
import { StyledCell } from "./cell.styles";

const Cell = ({ isLit, flipCellsAroundMe }) => {
  return (
    <StyledCell
      isLit={isLit}
      onClick={() => {
        flipCellsAroundMe();
      }}
    />
  );
};

export default Cell;
