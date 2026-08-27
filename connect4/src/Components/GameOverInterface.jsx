import React from "react";

// Get the name of the player and pop a small window to annonce it and restart button.
export default function GameOverModal({ winner, playerNames, onRestart }) {
  const winnerName = winner && winner !== "draw" ? (playerNames[winner] || `Joueur ${winner}`) : "";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(6,10,14,0.72)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 20,
      }}
    >
      <div
        style={{
          background: "#141d26",
          border: "1px solid #2a3947",
          borderRadius: 18,
          padding: "34px 30px",
          width: "min(88vw, 360px)",
          textAlign: "center",
          boxShadow: "0 40px 80px -20px rgba(0,0,0,0.7)",
        }}
      >
        <div style={{ fontSize: "2.4rem", marginBottom: 20 }}>
          {winner === "draw" ? "🤝" : "🏆"}
        </div>
        <h2 style={{ margin: "0 0 6px", color: "#ffffff", fontSize: "1.35rem" }}>
          {winner === "draw" ? "Match nul !" : `${winnerName} gagne !`}
        </h2>
        <button
          onClick={onRestart}
          style={{
            background: "linear-gradient(180deg, #ff7a4d, #e8623a)",
            color: "#0a1016",
            border: "none",
            fontWeight: 700,
            fontSize: "0.95rem",
            padding: "12px 26px",
            borderRadius: 10,
            cursor: "pointer",
            letterSpacing: "0.02em",
          }}
        >
          Nouvelle partie
        </button>
      </div>
    </div>
  );
}