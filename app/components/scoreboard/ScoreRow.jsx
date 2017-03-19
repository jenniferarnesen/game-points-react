import React from 'react';

const ScoreRow = (props) => (
  <tr>
    <td> {props.item} </td>
    <td className="{props.item}-quantity">
      {props.itemData.quantity}
    </td>
    <td className="{props.item}-score">
      {props.itemData.score}
    </td>
  </tr>
);

export default ScoreRow;
