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
  state = {
    orange: 'bananas',
  }
  addCount = () => {
    this.props.increment();
    this.setState({ orange: 'orange' });
  }
  subCount = () => {
    this.props.decrement();
    this.setState({ orange: 'banana' });
  }

  fetchGithubData = () => {
    const user = 'd-kang';
    fetch(`https://api.github.com/users/${user}`)
      .then(res => res.json())
      .then(res => console.log('res', res));
  }

  render() {
    return (
      <div>
        <h1>Welcome!!</h1>
        {this.state.orange}


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
        <input
          type="button"
          value="Github"
          onClick={this.fetchGithubData}
        />
      </div>
    );
  }
}

function mapState(...rest) {
  const [arg1] = rest;
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
