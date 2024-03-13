import React from "react";
import "./styles.scss";

const Board: React.FC = () => {
  const squares = new Array(9).fill(null);

  return (
    <div className="board">
      {squares.map((_, index) => {
        const isRowStart = index % 3 === 0;
        return (
          <React.Fragment key={index}>
            {isRowStart && <div className="board__row"></div>}
            <button className="board__square"></button>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Board;
