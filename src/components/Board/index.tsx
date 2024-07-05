import React, { useEffect, useState } from "react";
import "./styles.scss";

import { Players } from "../../constants/players";
import defineWinner from "../../helpers/defineWinners";

type Box = Players | null;

type BoardProps = {
  setWinner: React.Dispatch<React.SetStateAction<string>>;
};
const Board: React.FC<BoardProps> = ({ setWinner }) => {
  const [board, setBoard] = useState<Box[]>(Array(9).fill(null));

  const [noughtsArr, setNoughtsArr] = useState<number[]>([]);
  const [crossesArr, setCrossesArr] = useState<number[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState(Players.PlayerX);
  const [winResult, setWinResult] = useState<number[][]>([]);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    const index = Number(event.currentTarget.value) - 1;
    if (board[index] === null) {
      setBoard((prevBoard) => {
        const newBoard = [...prevBoard];
        newBoard[index] = currentPlayer;
        return newBoard;
      });
      if (currentPlayer === Players.PlayerX) {
        setCrossesArr((prevCrossesArr) => [...prevCrossesArr, index + 1]);
      } else {
        setNoughtsArr((prevNoughtsArr) => [...prevNoughtsArr, index + 1]);
      }
      setCurrentPlayer(
        currentPlayer === Players.PlayerX ? Players.PlayerO : Players.PlayerX
      );
    }
  };

  useEffect(() => {
    defineWinner(noughtsArr, crossesArr, setWinResult, setWinner);
  }, [noughtsArr, crossesArr]);

  return (
    <div className="game">
      <div className="board">
        {board.map((boxNumber, index) => (
          <button
            type="button"
            className="board__square"
            key={index}
            value={index + 1}
            onClick={handleClick}
          >
            {boxNumber}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Board;
