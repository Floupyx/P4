import React, { useState } from "react";
import Board from "./Board";
import TurnBanner from "./Turn";
import GameOverModal from "./GameOverInterface";
import { globalKeyframes } from "./Styles";
import { useConnect4 } from "../Game/Running";

export default function Connect4() {
  const [playerNames, setPlayerNames] = useState({
    1: "Joueur 1",
    2: "Joueur 2",
  });

  const {
    board,
    currentPlayer,
    gameOver,
    winner,
    lastMove,
    handleColumnClick,
    restart,
    isWinningCell,
  } = useConnect4();

  const handleNameChange = (player, newName) => {
    setPlayerNames((prev) => ({
      ...prev,
      [player]: newName,
    }));
  };

  // put everything together to create the game
  return (
    <main
      style={{
        minHeight: "100dvh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px 12px",
        background:
          "radial-gradient(circle at 50% 0%, #1b2733 0%, #101820 50%, #0a1016 100%)",
      }}
    >
      <style>{globalKeyframes}</style>
      <h1
        style={{
          color: "#ffffff",
          fontSize: "clamp(1.8rem, 5vw, 2.6rem)",
          fontWeight: 800,
          margin: "0 0 16px 0",
          letterSpacing: "0.04em",
          textAlign: "center",
        }}
      >
        Puissance 4
      </h1>

      <TurnBanner
        currentPlayer={currentPlayer}
        gameOver={gameOver}
        playerNames={playerNames}
        onNameChange={handleNameChange}
      />

      <Board
        board={board}
        gameOver={gameOver}
        lastMove={lastMove}
        isWinningCell={isWinningCell}
        onColumnClick={handleColumnClick}
      />

      {gameOver && (
        <GameOverModal
          winner={winner}
          playerNames={playerNames}
          onRestart={restart}
        />
      )}
    </main>
  );
}