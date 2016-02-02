import React from 'react';

export default class ScoreRow extends React.Component {
    render () {
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
}

