import React from 'react';
import GameButton from './GameButton.jsx';

const GameBoard = ({items, onItemClicked}) => {
  const buttons = Object.keys(items).map((button) => (
    <GameButton btn={button} onItemClicked={onItemClicked} key={button} />
  ));

  return (
    <section id="game-board">
      <header className="header">
        Random, meaningless points game
      </header>
      <div id="button-container">
        {buttons}
      </div>
    </section>
  );
}

export default GameBoard;
