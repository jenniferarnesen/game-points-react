import styles from './gameboard.css';
import React from 'react';
import GameButton from './GameButton.jsx';

const GameBoard = ({items, onItemClicked}) => {
  const buttons = Object.keys(items).map((button) => (
    <GameButton btn={button} onItemClicked={onItemClicked} key={button} />
  ));

  return (
    <section className={styles["game-board"]}>
      <header className={styles.header}>
        Random, meaningless points game
      </header>
      <div className={styles["button-container"]}>
        {buttons}
      </div>
    </section>
  );
}

export default GameBoard;
