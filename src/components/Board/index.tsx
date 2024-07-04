import React, { useState } from "react";
import "./styles.scss";
import BoardRow from "./BoardRow";
import { Players } from "../../constants/players";

const Board: React.FC = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(Players.PlayerX);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    const index = Number(event.currentTarget.value);
    if (!board[index]) {
      setBoard((prevBoard) => {
        const newBoard = [...prevBoard];
        newBoard[index] = currentPlayer;
        return newBoard;
      });
      setCurrentPlayer(
        currentPlayer === Players.PlayerX ? Players.PlayerO : Players.PlayerX
      );
    }
  };

  return (
    <div className="game">
      <div className="board">
        <BoardRow
          rowIndex={0}
          contents={board.slice(0, 3)}
          handleClick={handleClick}
        />
        <BoardRow
          rowIndex={1}
          contents={board.slice(3, 6)}
          handleClick={handleClick}
        />
        <BoardRow
          rowIndex={2}
          contents={board.slice(6, 9)}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Board;
