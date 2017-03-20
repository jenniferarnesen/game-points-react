import styles from './scoreboard.css';
import React from 'react';
import ScoreTable from './scoretable/ScoreTable.jsx';
import GameSummary from './GameSummary.jsx';

const ScoreBoard = ({data, onNewGameClicked}) => (
  <section className={styles.scoreboard}>
    <header className={styles.header}>
      Player Items
    </header>
    <ScoreTable items={data.items} />
    <GameSummary totals={data.totals} onNewGameClicked={onNewGameClicked} />
  </section>
);

export default ScoreBoard;
