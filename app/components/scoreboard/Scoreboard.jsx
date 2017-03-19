import React from 'react';
import Scores from './Scores.jsx';
import GameSummary from './GameSummary.jsx';

const ScoreBoard = (props) => {
  const theHandler = props.onNewGameClicked;

  return (
    <section id="score-board">
      <header className="header">
        Player Items
      </header>
      <Scores data={props.data.items} />
      <GameSummary
        data={props.data.totals}
        onTheNewGameClicked={theHandler} />
    </section>
  );
}

export default ScoreBoard;
