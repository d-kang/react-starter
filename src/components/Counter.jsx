import React, { Component } from 'react';

class Counter extends Component {
  addCount = () => {
    console.log('this.props', this.props);
    this.props.increment();
  }
  subCount = () => {
    this.props.decrement();
  }
  render() {
    return (
      <div>
        <input
          type="button"
          value="Add"
          onClick={this.addCount}
        />
        <input
          type="button"
          value="Subtract"
          onClick={this.subCount}
        />

      </div>
    );
  }
}




export default Counter;
