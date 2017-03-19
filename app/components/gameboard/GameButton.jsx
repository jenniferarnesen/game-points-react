import React from 'react';
import colorize from '../../lib/colorize.js';

const GameButton = ({btn, onItemClicked}) => {
  const handleClick = (e) => {
    e.preventDefault();
    onItemClicked(e.target.value);
  };
  
  const btnStyle = {
    backgroundColor: colorize(btn)
  };

  return (
    <button
      value={btn}
      className="game-button"
      style={btnStyle}
      onClick={handleClick}>
      {btn}
    </button>
  );
}

export default GameButton;
