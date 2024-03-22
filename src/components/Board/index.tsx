import React from "react";
import "./styles.scss";

const Board: React.FC = () => {
  return (
    <div className="board">
      {Array(3)
        .fill(null)
        .map((_, rowIndex) => (
          <div key={rowIndex} className="board__row">
            {Array(3)
              .fill(null)
              .map((_, squareIndex) => (
                <button key={squareIndex} className="board__square"></button>
              ))}
          </div>
        ))}
    </div>
  );
};

export default Board;
