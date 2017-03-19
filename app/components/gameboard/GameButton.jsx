import React from 'react';
import colorize from '../../lib/colorize.js';

const GameButton = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.onTheItemClicked(e.target.value);
  };
  
  const btnStyle = {
    backgroundColor: colorize(props.btn)
  };

  return (
    <button
      value={props.btn}
      className="game-button"
      style={btnStyle}
      onClick={handleClick}>
      {props.btn}
    </button>
  );
}

export default GameButton;
