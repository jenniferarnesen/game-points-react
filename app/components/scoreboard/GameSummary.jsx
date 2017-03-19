import React from 'react';

const GameSummary = ({onNewGameClicked, totals}) => (
  <summary id="game-summary">
    <div id="bonus">
      <span>Bonus points: </span>
      <span>{totals.bonus}</span>
    </div>
    <div id="total">
      <span>Total points: </span>
      <span>{totals.total}</span>
    </div>
    <div id="new-game">
      <button id="new-game-button" onClick={onNewGameClicked}>
        New Game
      </button>
    </div>
  </summary>
);

export default GameSummary;
