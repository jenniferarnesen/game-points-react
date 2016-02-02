import React from 'react';
import GameButton from './GameButton';

export default class GameBoard extends React.Component {
    render () {
        var theHandler = this.props.onItemClicked,
            buttons = Object.keys(this.props.data).map(function (button) {
                return (
                    <GameButton
                        btn={button}
                        key={button}
                        onTheItemClicked={theHandler}/>
                );
            });

        return (
            <section id="game-board">
                <header className="header">
                    Kahoot! Points
                </header>
                <div id="button-container">
                    {buttons}
                </div>
            </section>
        );
    }
}
