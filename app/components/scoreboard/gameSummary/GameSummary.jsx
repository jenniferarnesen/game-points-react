import styles from './gameSummary.css';
import React from 'react';

const GameSummary = ({totals, onNewGameClicked}) => (
  <summary id="game-summary">
    <div className={styles.bonus}>
      <span>Bonus points: </span>
      <span>{totals.bonus}</span>
    </div>
    <div id="total">
      <span>Total points: </span>
      <span>{totals.total}</span>
    </div>
    <div className={styles["new-game"]}>
      <button className={styles["new-game-button"]} onClick={onNewGameClicked}>
        New Game
      </button>
    </div>
  </summary>
);

export default GameSummary;
