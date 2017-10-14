import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  addCount = () => {
    this.props.count++
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
  return {
    count: 0,
    myStr: 'counter',
  };
}

export default connect(mapState)(App);
