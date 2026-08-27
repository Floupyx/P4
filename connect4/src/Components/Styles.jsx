// piece drop animation.

export const globalKeyframes = `
  @keyframes dropInDynamic {
    0%   { opacity: 1; transform: translateY(var(--drop-from)) scale(0.95); }
    70%  { opacity: 1; transform: translateY(6px) scale(1.02); }
    85%  { opacity: 1; transform: translateY(-3px) scale(0.99); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }

  @keyframes winPulse {
    0%, 100% { filter: brightness(1); }
    50%      { filter: brightness(1.35); }
  }

  .c4-column:hover { background: rgba(255,255,255,0.03); }
`;

// help change player.
export const playerColor = (player) => (player === 1 ? "#ff7a4d" : "#3fc7c1");
export const playerGlow = (player) => (player === 1 ? "#ff9d73" : "#7fe3de");