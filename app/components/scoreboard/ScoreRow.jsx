import React from 'react';

const ScoreRow = ({itemName, quantity, score}) => (
  <tr>
    <td> {itemName} </td>
    <td className="{item}-quantity">
      {quantity}
    </td>
    <td className="{item}-score">
      {score}
    </td>
  </tr>
);

export default ScoreRow;
