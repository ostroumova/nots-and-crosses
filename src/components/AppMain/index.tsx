import React, { useState } from "react";
import Board from "../Board";
import TurnInfoDisplay from "../TurnInfoDisplay";
import WinnerBanner from "../WinnerBanner";

const AppMain: React.FC = () => {
  const [winner, setWinner] = useState("");
  return (
    <main>
      <TurnInfoDisplay />
      <Board setWinner={setWinner} />
      <WinnerBanner winner={winner} />
    </main>
  );
};

export default AppMain;
