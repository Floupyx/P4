import React from "react";
import { playerColor, playerGlow } from "./Styles";

export default function Piece({ player, isNew, row = 0 }) {
  const color = playerColor(player);
  const glow = playerGlow(player);

  // find the heigt at witch the piece will drop.
  const dropDistance = `calc(-${(5 - row + 1) * 100}% - ${(5 - row + 1) * 6}px)`;

  // piece parameters.
  return (
    <div
      style={{
        position: "absolute",
        inset: "8%",
        borderRadius: "50%",
        background: `radial-gradient(circle at 35% 30%, ${glow}, ${color} 70%)`,
        boxShadow: `0 2px 6px rgba(0,0,0,0.4), 0 0 18px -4px ${color}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: isNew ? 10 : 1,
        "--drop-from": dropDistance,
        animation: isNew ? "dropInDynamic 0.45s cubic-bezier(.25, 1, .5, 1) forwards" : "none",
      }}
    />
  );
}