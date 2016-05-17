import React from 'react';
import { Component } from 'react';
import SimpleBox from './simple_box';
import Table from './table';

export default class App extends Component {
  render() {
    return (
        <Table rows={3} columns={3} />
    );
  }
}
