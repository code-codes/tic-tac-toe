import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setgameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setgameBoard((gameBoard) => {
      const updatedgameBoard = [...gameBoard.map(innerArray => [...innerArray])]
      updatedgameBoard[rowIndex][colIndex] = 'X';
      return updatedgameBoard
    });
  }
  return (
    <div>
      {gameBoard.map((row, rowIndex) => (
        <ol key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>handleSelectSquare(rowIndex, colIndex)}>{col}</button>
              </li>
            ))}
          </ol>
        </ol>
      ))}
    </div>
  );
}
