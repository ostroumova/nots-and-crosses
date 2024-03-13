import React from "react";
import "./styles.scss";

const Board: React.FC = () => {
  const renderSquares = () => {
    const squares = [];
    for (let i = 0; i < 3; i++) {
      squares.push(<button key={i} className="board__square"></button>);
    }
    return squares;
  };

  return (
    <>
      <div className="board">
        <div className="board__row">{renderSquares()}</div>
        <div className="board__row">{renderSquares()}</div>
        <div className="board__row">{renderSquares()}</div>
      </div>
    </>
  );
};

export default Board;
