import {scoretable} from './scoreTable.css';
import React from 'react';
import ScoreRow from './ScoreRow.jsx';

const Scores = ({items}) => {
  const rows = Object.keys(items).map((itemName) => {
    const {quantity, score} = items[itemName];
    return (
      <ScoreRow itemName={itemName} quantity={quantity} score={score} key={itemName} />
    );
  });

  return (
    <table className={scoretable}>
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
  );
}

export default Scores;
