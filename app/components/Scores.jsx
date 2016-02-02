import React from 'react';
import ScoreRow from './ScoreRow';

export default class Scores extends React.Component {
    render () {
        var data = this.props.data,

            rows = Object.keys(this.props.data).map(function (item) {
                var itemData = data[item];
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
}