import React from "react";
import Cell from "./Cell";
import { ROWS, COLS } from "../Game/Constants";

// Board parameters
export default function Board({ board, gameOver, lastMove, isWinningCell, onColumnClick }) {
  return (
    <div
      style={{
        width: "min(94vw, 70vh, 520px)",
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gap: "clamp(3px, 1vw, 6px)",
        background: "linear-gradient(180deg, #141d26, #0f1720)",
        border: "1px solid #2a3947",
        borderRadius: "clamp(10px, 2vw, 16px)",
        padding: "clamp(6px, 1.5vw, 10px)",
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.03)",
        touchAction: "manipulation",
      }}
    >
      {Array.from({ length: COLS }, (_, c) => (
        <div
          key={c}
          className="c4-column"
          onClick={() => !gameOver && onColumnClick(c)}
          style={{
            display: "flex",
            flexDirection: "column-reverse",
            gap: "clamp(3px, 1vw, 6px)",
            cursor: gameOver ? "not-allowed" : "pointer",
            borderRadius: 8,
            padding: 2,
          }}
        >
          {Array.from({ length: ROWS }, (_, r) => (
            <Cell
              key={r}
              row={r}
              value={board[r][c]}
              isWinning={isWinningCell(r, c)}
              isNew={lastMove?.row === r && lastMove?.col === c}
            />
          ))}
        </div>
      ))}
    </div>
  );
}