import { ROWS, COLS } from "./Constants";

// return a array of 7x6 full of 0 witch means a empty board.
export function createEmptyBoard() {
  return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
}

// check if everything is withing bound.
export function inBounds(r, c) {
  return r >= 0 && r < ROWS && c >= 0 && c < COLS;
}

// check for every winning position if any return the coordinate else null.
export function getWinningCells(board, row, col, player) {
  const directions = [
    { dr: 0, dc: 1 },  // horizontale
    { dr: 1, dc: 0 },  // verticale
    { dr: 1, dc: 1 },  // diagonale /
    { dr: 1, dc: -1 }, // diagonale \
  ];

  for (const { dr, dc } of directions) {
    const line = [[row, col]];

    let r = row + dr, c = col + dc;
    while (inBounds(r, c) && board[r][c] === player) {
      line.push([r, c]);
      r += dr; c += dc;
    }
    r = row - dr; c = col - dc;
    while (inBounds(r, c) && board[r][c] === player) {
      line.push([r, c]);
      r -= dr; c -= dc;
    }

    if (line.length >= 4) return line;
  }
  return null;
}

// return the position of the lowest heigt witch is empty in a col.
export function lowestEmptyRow(board, col) {
  for (let r = 0; r < ROWS; r++) {
    if (board[r][col] === 0) return r;
  }
  return -1;
}

// check if it is a draw.
export function isBoardFull(board) {
  return board[ROWS - 1].every((cell) => cell !== 0);
}