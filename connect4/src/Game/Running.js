import { useState, useCallback } from "react";
import {
  createEmptyBoard,
  getWinningCells,
  lowestEmptyRow,
  isBoardFull,
} from "./Initialization";

export function useConnect4() {
  const [board, setBoard] = useState(createEmptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null); // outcome: 1 | 2 | "draw" | null
  const [winningCells, setWinningCells] = useState([]); // position of the 4 winning piece.
  const [lastMove, setLastMove] = useState(null); // {row, col} position of the last move.

  // handle player click to make avery play.
  const handleColumnClick = useCallback(
    (col) => {
      if (gameOver) return;

      const row = lowestEmptyRow(board, col);
      if (row === -1) return; // colonne pleine

      const newBoard = board.map((r) => r.slice());
      newBoard[row][col] = currentPlayer;

      const winCells = getWinningCells(newBoard, row, col, currentPlayer);

      setBoard(newBoard);
      setLastMove({ row, col });

      if (winCells) {
        setGameOver(true);
        setWinner(currentPlayer);
        setWinningCells(winCells);
        return;
      }

      if (isBoardFull(newBoard)) {
        setGameOver(true);
        setWinner("draw");
        return;
      }

      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    },
    [board, currentPlayer, gameOver]
  );

  // reset everything on the board.
  const restart = useCallback(() => {
    setBoard(createEmptyBoard());
    setCurrentPlayer(1);
    setGameOver(false);
    setWinner(null);
    setWinningCells([]);
    setLastMove(null);
  }, []);

  // check for winning condition.
  const isWinningCell = useCallback(
    (r, c) => winningCells.some(([wr, wc]) => wr === r && wc === c),
    [winningCells]
  );

  return {
    board,
    currentPlayer,
    gameOver,
    winner,
    winningCells,
    lastMove,
    handleColumnClick,
    restart,
    isWinningCell,
  };
}