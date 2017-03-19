import React from 'react';
import ScoreRow from './ScoreRow.jsx';

const Scores = (props) => {
  const data = props.data,

    rows = Object.keys(props.data).map((item) => {
      const itemData = data[item];
      return (
        <ScoreRow item={item} itemData={itemData} key={item} />
      );
    });

  return (
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
  );
}

export default Scores;
