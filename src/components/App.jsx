import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  addCount = () => {
    this.props.myActionCreator();
  }

  render() {
    console.log('<App /> this.props', this.props)
    return (
      <div>
        <div>{ `${this.props.myStr} ${this.props.count}` }</div>
        <input
          type="button"
          value="button"
          onClick={this.addCount}
        />
      </div>
    );
  }
}

function mapState(...rest) {
  console.log('mapState ...rest', rest)
  const [ arg1, arg2 ] = rest;
  console.log('arg1', arg1, 'arg2', arg2)

  return {
    count: arg1.global.count
  };
}

function myActionCreator() {
  return {
    type: 'INCREMENT',
  };
}

export default connect(mapState, { myActionCreator })(App);
