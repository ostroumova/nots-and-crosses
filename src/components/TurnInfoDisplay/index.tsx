import React from "react";
import { Players } from "../../constants/players";
import "./styles.scss";

const TurnInfoDisplay: React.FC = () => {
  return (
    <div className="game-info">
      <h4>Player One: {Players.PlayerX}</h4>
      <h4>Player Two: {Players.PlayerO}</h4>
    </div>
  );
};

export default TurnInfoDisplay;
