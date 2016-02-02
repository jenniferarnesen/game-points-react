import React from 'react';

export default class GameSummary extends React.Component {
    handleClick = () => {
        this.props.onTheNewGameClicked();
    };

    render () {
        return (
            <summary id="game-summary">
                <div id="bonus">
                    <span>Bonus points: </span>
                    <span id="bonus-points">{this.props.data.bonus}</span>
                </div>
                <div id="total">
                    <span>Total points: </span>
                    <span id="total-points">{this.props.data.total}</span>
                </div>
                <div id="new-game">
                    <button
                        id="new-game-button"
                        onClick={this.handleClick}>
                    New Game
                    </button>
                </div>
            </summary>
        );
    }
}