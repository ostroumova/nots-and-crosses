import React, { useEffect, useState } from "react";
import "./styles.scss";

import { Players } from "../../constants/players";

type Box = Players | null;

type BoardProps = {
  setWinner: (value: string) => void;
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

  const winArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  const isSubset = (xoArr: number[], winArr: number[]) =>
    winArr.every((number) => xoArr.includes(number));

  useEffect(() => {
    const noughtResult: number[][] = winArrays.filter((winArray) =>
      isSubset(noughtsArr, winArray)
    );
    const crossResult: number[][] = winArrays.filter((winArray) =>
      isSubset(crossesArr, winArray)
    );

    let thisWinner = "";
    if (noughtResult.length > 0) {
      thisWinner = "Noughts";
      const result = [...noughtResult];
      setWinResult(result);
    } else if (crossResult.length > 0) {
      thisWinner = "Crosses";
      const result = [...crossResult];
      setWinResult(result);
    }
    setWinner(thisWinner);

    const combinedArr = [...crossesArr, ...noughtsArr];
    if (!thisWinner && combinedArr.length === 9) {
      setWinner(`Draw`);
    }
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
