import React from 'react';

const GameSummary = (props) => {
  const handleClick = () => {
    props.onTheNewGameClicked();
  };

  return (
    <summary id="game-summary">
      <div id="bonus">
        <span>Bonus points: </span>
        <span id="bonus-points">{props.data.bonus}</span>
      </div>
      <div id="total">
        <span>Total points: </span>
        <span id="total-points">{props.data.total}</span>
      </div>
      <div id="new-game">
        <button id="new-game-button" onClick={handleClick}>
          New Game
        </button>
      </div>
    </summary>
  );
}

export default GameSummary;
