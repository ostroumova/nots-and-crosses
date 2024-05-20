import React from "react";
import Board from "../Board";
import TurnInfoDisplay from "../TurnInfoDisplay";

const AppMain: React.FC = () => {
  return (
    <main>
      <TurnInfoDisplay />
      <Board />
    </main>
  );
};

export default AppMain;
