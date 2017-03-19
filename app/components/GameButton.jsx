import React from 'react';
import colorize from '../lib/colorize.js';

export default class GameButton extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.onTheItemClicked(e.target.value);
  };

  render() {
    var btnStyle = {
      backgroundColor: colorize(this.props.btn)
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
}
