import React from 'react';
import GameButton from './GameButton.jsx';

const GameBoard = ({onItemClicked, items}) => {
  const theHandler = onItemClicked,
    buttons = Object.keys(items).map((button) => (
      <GameButton
        btn={button}
        key={button}
        onTheItemClicked={theHandler} />
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
