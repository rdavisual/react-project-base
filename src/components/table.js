/*jshint esversion: 6 */
import React, { Component } from 'react';
import SimpleBox from './simple_box';

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table : []
        };
    }

    render() {
        let count = 0;
        const columnsMaker = () => {
            let columns = [];
            for (var i = 0; i < this.props.columns; i++) {
                columns.push(<SimpleBox id={count} classBox="" />);
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
