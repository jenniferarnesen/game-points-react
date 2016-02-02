import React from 'react';

import game from '../lib/game.js';

import GameBoard from './Gameboard.jsx';
import ScoreBoard from './Scoreboard.jsx';

export default class Game extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            data: {
                items: {},
                totals: {}
            }
        };
    }

    componentDidMount () {
        var items = game.init();
        console.log('items are', items);
        this.initializeGame(items);
    }

    initializeGame (items) {
        var gameData = {};

        gameData.items = Object.keys(items).reduce(function (obj, curr) {
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

        this.setState({data: gameData});
    }

    handleItemClicked = (item) => {
        console.log('you clicked this', this.state);
        var gameData = this.state.data;

        gameData.items[item] = {
            quantity: game.increment(item),
            score: game.score(item)
        };

        gameData.totals = {
            bonus: game.bonus(),
            total: game.total()
        };
        this.setState({data: gameData});
    };

    handleNewGameClicked = () => {
        var items = game.reset();
        this.initializeGame(items);
    };

    render() {
        return (
            <article id="game">
                <GameBoard
                    data={this.state.data.items}
                    onItemClicked={this.handleItemClicked}/>
                <ScoreBoard data={this.state.data}
                    onNewGameClicked={this.handleNewGameClicked}/>
            </article>
        );
    }
}
