import React from 'react';
import game from '../lib/game.js';
import GameBoard from './gameboard/Gameboard.jsx';
import ScoreBoard from './scoreboard/Scoreboard.jsx';

export default class Game extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {
        items: {},
        totals: {}
      }
    };
  }

  componentDidMount() {
    const items = game.init();
    this.initializeGame(items);
  }

  initializeGame(items) {
    const gameData = {};

    gameData.items = Object.keys(items).reduce((obj, curr) => {
      obj[curr] = {
        quantity: items[curr],
        score: game.score(curr)
      };
      return obj;
    }, {});

    gameData.totals = {
      bonus: game.bonus(),
      total: game.total()
    };

    this.setState({ data: gameData });
  }

  handleItemClicked = (item) => {
    const gameData = this.state.data;

    gameData.items[item] = {
      quantity: game.increment(item),
      score: game.score(item)
    };

    gameData.totals = {
      bonus: game.bonus(),
      total: game.total()
    };
    this.setState({ data: gameData });
  };

  handleNewGameClicked = () => {
    const items = game.reset();
    this.initializeGame(items);
  };

  render() {
    return (
      <article id="game">
        <GameBoard
          items={this.state.data.items}
          onItemClicked={this.handleItemClicked} />
        <ScoreBoard
          data={this.state.data}
          onNewGameClicked={this.handleNewGameClicked} />
      </article>
    );
  }
}
