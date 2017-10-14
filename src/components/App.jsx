import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    myStr: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  }
  addCount = () => {
    this.props.increment();
  }
  subCount = () => {
    this.props.decrement();
  }

  render() {
    console.log('<App /> this.props', this.props);
    return (
      <div>
        <div>{ `${this.props.myStr} ${this.props.count}` }</div>
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

function mapState(...rest) {
  console.log('mapState ...rest', rest);
  const [arg1, arg2] = rest;
  console.log('arg1', arg1, 'arg2', arg2);

  return {
    count: arg1.global.count,
  };
}

function increment() {
  return {
    type: 'INCREMENT',
  };
}
function decrement() {
  return {
    type: 'DECREMENT',
  };
}


export default connect(mapState, { increment, decrement })(App);
