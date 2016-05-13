/*jshint esversion: 6 */
import React, { Component } from 'react';
import SimpleBox from './simple_box';

export default class Table extends Component {
    constructor(props) {
        super(props);
        let boxesLength = this.props.rows * this.props.columns,
                cells = [];
        for (let i = 0; i < boxesLength; i++) {
            let cell = { id:i, classBox: ""};
            cells.push(cell);
        }
        this.state = { table : cells };
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(id) {
        let table = this.state.table;
        table[parseInt(id)].classBox = !table[parseInt(id)].classBox? "black" : "";
        this.setState({'table':table});
    }

    render() {
        let count = 0;
        const columnsMaker = () => {
            let columns = [];
            for (var i = 0; i < this.props.columns; i++) {
                const cell = this.state.table[count];
                columns.push(<SimpleBox compId={cell.id} onClick={this.clickHandler} classBox={cell.classBox} />);
                count += 1;
            }
            columns.push(<br />);
            return columns;
        };
        const rowsMaker = () => {
            let rows = [];
            for (var i = 0; i < this.props.rows; i++) {
                rows.push(columnsMaker());
            }
            return rows;
        };

        return (
            <div className="tableBox">
                {rowsMaker()}
            </div>
        );
    }
}
