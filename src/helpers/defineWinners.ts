import { winArrays } from "../constants/winArrays";

const isSubset = (xoArr: number[], winArr: number[]) =>
  winArr.every((number) => xoArr.includes(number));

export default function defineWinner(
  noughtsArr: number[],
  crossesArr: number[],
  setWinResult: React.Dispatch<React.SetStateAction<number[][]>>,
  setWinner: React.Dispatch<React.SetStateAction<string>>
) {
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
}
