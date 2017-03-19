import React from 'react';
import Scores from './Scores';
import GameSummary from './GameSummary';

export default class ScoreBoard extends React.Component {
  render() {
    var theHandler = this.props.onNewGameClicked;

    return (
      <section id="score-board">
        <header className="header">
          Player Items
                </header>
        <Scores data={this.props.data.items} />
        <GameSummary
          data={this.props.data.totals}
          onTheNewGameClicked={theHandler} />
      </section>
    );
  }
}
