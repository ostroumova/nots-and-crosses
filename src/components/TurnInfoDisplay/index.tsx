import React from "react";

const TurnInfoDisplay: React.FC = () => {
  const currentPlayer = "X";
  const secondPlayer = "O";

  return (
    <div className="game-info">
      <div>Player One: {currentPlayer}</div>
      <div>Player Two: {secondPlayer}</div>
    </div>
  );
};

export default TurnInfoDisplay;
