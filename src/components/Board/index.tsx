import React, { useState } from "react";
import "./styles.scss";

const Board: React.FC = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const currentPlayer = "X";

  const handleClick = (index: number) => {
    if (!board[index]) {
      setBoard((prevBoard) => {
        const newBoard = [...prevBoard];
        newBoard[index] = currentPlayer;
        return newBoard;
      });
    }
  };

  return (
    <div className="game">
      <div className="board">
        {Array(3)
          .fill(null)
          .map((_, rowIndex) => (
            <div key={rowIndex} className="board__row">
              {Array(3)
                .fill(null)
                .map((_, squareIndex) => {
                  const index = rowIndex * 3 + squareIndex;
                  return (
                    <button
                      key={squareIndex}
                      className="board__square"
                      onClick={() => handleClick(index)}
                    >
                      {board[index]}
                    </button>
                  );
                })}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Board;
