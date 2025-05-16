import { useState } from "react";
import "../css/editbutton.css";
const initialboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export function Gameboard({ onSelectgameboard, activePlayer }) {
  const [board, setboard] = useState(initialboard);

  function handlegameboard(rowindex, colindex) {
    onSelectgameboard();

    return setboard((prevgameboard) => {
      const update = [...prevgameboard.map((val) => [...val])];
      update[rowindex][colindex] = activePlayer;
      return update;
    });
  }

  return (
    <ol className="game">
      {board.map((row, rowindex) => (
        <li key={rowindex}>
          <ol>
            {row.map((Symbol, colindex) => (
              <li key={colindex}>
                <button
                  onClick={() => {
                    handlegameboard(rowindex, colindex);
                  }}
                >
                  {Symbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
