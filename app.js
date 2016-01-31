var GameButton = React.createClass({
    handleClick: function (e) {
        this.props.onTheItemClicked(e.target.value);
    },

    render: function () {
        var btnStyle = {
                backgroundColor: colorizer.get(this.props.btn)
            };

        return (
            <button 
                value={this.props.btn}
                className="game-button"
                style={btnStyle}
                onClick={this.handleClick}>
                {this.props.btn}
            </button>
        );
    }
})

var ScoreRow = React.createClass({
    render: function () {
        return (
            <tr>
                <td> {this.props.item} </td>
                <td className="{this.props.item}-quantity">
                    {this.props.itemData.quantity}
                </td>
                <td className="{this.props.item}-score">
                    {this.props.itemData.score}
                </td>
            </tr>
        );
    }
});

var Scores = React.createClass({
    render: function () {
        var data = this.props.data,

            rows = Object.keys(this.props.data).map(function (item) {
                var itemData = data[item];
                return (
                    <ScoreRow item={item} itemData={itemData} key={item} />
                );
            });

        return (
            <div id="scores">
                <table id="score-table">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
});

var GameSummary = React.createClass({
    handleClick: function () {
        this.props.onTheNewGameClicked();
    },

    render: function () {
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
});

var GameBoard = React.createClass({
    render: function() {
        var theHandler = this.props.onItemClicked,
            buttons = Object.keys(this.props.data).map(function (button) {
                return (
                    <GameButton
                        btn={button}
                        key={button}
                        onTheItemClicked={theHandler} />
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
});

var ScoreBoard = React.createClass({
    render: function () {
        var theHandler = this.props.onNewGameClicked;
        return (
            <section id="score-board">
                <header className="header">
                    Player Items
                </header>
                <div>
                    <Scores data={this.props.data.items} />
                    <GameSummary
                        data={this.props.data.totals}
                        onTheNewGameClicked={theHandler}/>
                </div>
            </section>
        );
    }
});

var Game = React.createClass({
    getInitialState: function () {
        return {data: {
            items: {},
            totals: {}
        }};
    },

    initializeGame: function (items) {
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
    },

    componentDidMount: function () {
        var items = game.init();
        this.initializeGame(items);
    },

    handleItemClicked: function (item) {
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
    },

    handleNewGameClicked: function () {
        var items = game.reset();
        this.initializeGame(items);
    },

    render: function () {
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
});

ReactDOM.render(
    <Game />,
    document.getElementById("game-top")
);
