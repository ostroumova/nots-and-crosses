import React from "react";
import "./styles.scss";

const Board: React.FC = () => {
  return (
    <>
      <div className="board">
        <div className="board__row">
          <button className="board__square"></button>
          <button className="board__square"></button>
          <button className="board__square"></button>
        </div>
        <div className="board__row">
          <button className="board__square"></button>
          <button className="board__square"></button>
          <button className="board__square"></button>
        </div>
        <div className="board__row">
          <button className="board__square"></button>
          <button className="board__square"></button>
          <button className="board__square"></button>
        </div>
      </div>
    </>
  );
};

export default Board;
