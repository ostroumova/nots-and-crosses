import React from "react";

const TurnInfoDisplay: React.FC = () => {
  const currentPlayer = "X";
  return (
    <div className="game-info">
      <div>Player One: {currentPlayer}</div>
    </div>
  );
};

export default TurnInfoDisplay;
