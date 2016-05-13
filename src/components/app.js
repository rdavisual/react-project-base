import React from 'react';
import { Component } from 'react';
import SimpleBox from './simple_box';

export default class App extends Component {
  render() {
    return (
      <div>
        <SimpleBox id={1} classBox="black" />
        <SimpleBox id={2} classBox="" />
        <SimpleBox id={3} classBox="green" />
        <SimpleBox id={4} classBox="" />
        <SimpleBox id={5} classBox="red" />
        <SimpleBox id={6} classBox="" />
      </div>
    );
  }
}
