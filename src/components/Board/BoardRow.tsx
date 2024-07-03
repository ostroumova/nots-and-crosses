import React from "react";

type BoardRowProps = {
  rowIndex: number;
  contents: null[];
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

const BoardRow: React.FC<BoardRowProps> = ({
  rowIndex,
  contents,
  handleClick,
}) => {
  return (
    <div>
      <div key={rowIndex} className="board__row">
        {Array(3)
          .fill(null)
          .map((_, squareIndex) => {
            const index = rowIndex * 3 + squareIndex;

            return (
              <button
                value={index}
                aria-label={`tile ${rowIndex}, ${squareIndex}`}
                key={squareIndex}
                className="board__square"
                onClick={handleClick}
              >
                {contents[squareIndex]}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default BoardRow;
