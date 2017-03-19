import React from 'react';
import Scores from './Scores.jsx';
import GameSummary from './GameSummary.jsx';

const ScoreBoard = ({onNewGameClicked, data}) => (
  <section id="score-board">
    <header className="header">
      Player Items
    </header>
    <Scores items={data.items} />
    <GameSummary
      totals={data.totals}
      onNewGameClicked={onNewGameClicked} />
  </section>
);

export default ScoreBoard;
