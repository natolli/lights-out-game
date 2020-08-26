import React, { useState, useEffect } from "react";
import Cell from "../cell/cell.component";
import Win from "../win/win.component";
import CustomButton from "../custom-button/custom-button.component";
import { BoardContainer } from "./board.styles";

const Board = ({
  nrows = 5,
  ncolumns = 5,
  chanceLightStartsOn = 0.25,
  history,
}) => {
  const [hasWon, setHasWon] = useState(false);

  const createBoard = () => {
    let brd = [];
    for (let y = 0; y < nrows; y++) {
      let row = [];
      for (let x = 0; x < ncolumns; x++) {
        row.push(Math.random() < chanceLightStartsOn);
      }
      brd.push(row);
    }
    return brd;
  };

  const [board, setBoard] = useState(createBoard());

  const flipCellsAround = (coord) => {
    let brd = [...board];
    let [y, x] = coord.split("-").map(Number);

    function flipCell(y, x) {
      // if this coord is actually on board, flip it
      console.log(board);
      if (x >= 0 && x < 5 && y >= 0 && y < 5) {
        board[y][x] = !board[y][x];
      }
    }

    flipCell(y, x); //Flip initial cell
    flipCell(y, x - 1); //flip left
    flipCell(y, x + 1); //flip right
    flipCell(y - 1, x); //flip below
    flipCell(y + 1, x); //flip above

    //   // win when every cell is turned off

    let hasWonIt = board.every((row) => row.every((cell) => !cell));
    setBoard(brd);

    setHasWon(hasWonIt);
  };

  let tblBoard = [];

  for (let y = 0; y < nrows; y++) {
    let row = [];
    for (let x = 0; x < ncolumns; x++) {
      let coord = `${y}-${x}`;
      row.push(
        <Cell
          key={coord}
          isLit={board[y][x]}
          flipCellsAroundMe={() => flipCellsAround(coord)}
        />
      );
    }
    tblBoard.push(<tr key={y}>{row}</tr>);
  }

  return (
    <>
      {hasWon ? (
        <Win />
      ) : (
        <BoardContainer>
          <table>
            <tbody>{tblBoard}</tbody>
          </table>
          <CustomButton onClick={() => history.push("/")}>End</CustomButton>
        </BoardContainer>
      )}
    </>
  );
};

export default Board;
