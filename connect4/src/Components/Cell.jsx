import React from "react";
import Piece from "./Piece";

// cell parameters, 3 state: 0 empty, 1 player1 and 2 player2. And isNew for the current player move.
export default function Cell({ value, isWinning, isNew, row }) {
  return (
    <div
      style={{
        position: "relative",
        aspectRatio: "1 / 1",
        borderRadius: "50%",
        background: "#0e161d",
        boxShadow: isWinning
          ? "0 0 0 3px #ffd76a, 0 0 22px 2px #ffd76a, inset 0 3px 6px rgba(0,0,0,0.6)"
          : "inset 0 3px 6px rgba(0,0,0,0.6), inset 0 -1px 0 rgba(255,255,255,0.03), 0 0 0 1px #26343f",
        animation: isWinning ? "winPulse 1s ease-in-out infinite" : "none",
      }}
    >
      {value !== 0 && <Piece player={value} isNew={isNew} row={row} />}
    </div>
  );
}