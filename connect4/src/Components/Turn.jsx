import React, { useState } from "react";
import { playerColor } from "./Styles";

// change the actual player.
function TurnSide({ player, active, name, onNameChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const color = playerColor(player);
  const isP1 = player === 1;

  const arrow = (
    <span
      style={{
        fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
        color,
        opacity: active ? 1 : 0,
        transition: "opacity 0.25s ease",
      }}
    >
      {isP1 ? "▶" : "◀"}
    </span>
  );

  const icon = (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      style={{ flexShrink: 0, width: "clamp(16px, 3.5vw, 22px)", height: "clamp(16px, 3.5vw, 22px)" }}
    >
      <circle cx="12" cy="12" r="10" fill={color} />
    </svg>
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isP1 ? "row" : "row-reverse",
        alignItems: "center",
        gap: "clamp(4px, 1.5vw, 8px)",
        padding: "4px 8px",
        borderRadius: 8,
        background: active ? "rgba(255,255,255,0.06)" : "transparent",
        opacity: active ? 1 : 0.5,
        transition: "opacity 0.25s ease, background 0.25s ease",
      }}
    >
      {arrow}
      {icon}
      {isEditing ? (
        <input
          type="text"
          value={name}
          autoFocus
          maxLength={12}
          onChange={(e) => onNameChange(player, e.target.value)}
          onBlur={() => setIsEditing(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter") setIsEditing(false);
          }}
          style={{
            background: "#101820",
            border: `1px solid ${color}`,
            borderRadius: 6,
            color: "#fff",
            fontSize: "clamp(0.8rem, 2.5vw, 0.95rem)",
            fontWeight: 600,
            padding: "2px 4px",
            width: "clamp(70px, 18vw, 110px)",
            textAlign: isP1 ? "left" : "right",
            outline: "none",
          }}
        />
      ) : (
        <span
          onClick={() => setIsEditing(true)}
          title="Cliquer pour modifier"
          style={{
            fontWeight: 600,
            fontSize: "clamp(0.8rem, 2.5vw, 0.95rem)",
            cursor: "pointer",
            borderBottom: "1px dashed rgba(255,255,255,0.3)",
            maxWidth: "clamp(70px, 20vw, 120px)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {name || `Joueur ${player}`} ✏️
        </span>
      )}
    </div>
  );
}

// change the banner to show the actual player.
export default function TurnBanner({ currentPlayer, gameOver, playerNames, onNameChange }) {
  return (
    <div
      style={{
        width: "min(94vw, 70vh, 520px)",
        background: "#1c2733",
        border: "1px solid #2a3947",
        borderRadius: "clamp(10px, 2vw, 14px)",
        padding: "clamp(8px, 2vw, 12px) clamp(10px, 2.5vw, 16px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "clamp(10px, 2.5vh, 16px)",
      }}
    >
      <TurnSide
        player={1}
        active={currentPlayer === 1 && !gameOver}
        name={playerNames[1]}
        onNameChange={onNameChange}
      />
      <TurnSide
        player={2}
        active={currentPlayer === 2 && !gameOver}
        name={playerNames[2]}
        onNameChange={onNameChange}
      />
    </div>
  );
}