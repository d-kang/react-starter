import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GenericFormField from './GenericFormField';
import Counter from './Counter';
import Display from './Display';
import Welcome from './Welcome';
import AsyncFunc from './AsyncFunc';
import PingObservable from './PingObservable';
import TypingGame from './TypingGame';

export class App extends Component {
  state = {
    hasError: false,
  }
  componentDidCatch(err, info) {
    this.setState({ hasError: true });
    console.log('1111111', err, info);
  }


  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    console.log('<App /> this', this);
    return (
      <div>
        <Welcome welcome={this.props.welcome} />
        <br />
        <br />
        <br />
        <Display {...this.props} >
        <Counter {...this.props} />
        <br />
        <br />
        <br />
        <AsyncFunc {...this.props} />
        <br />
        <br />
        <br />
        <GenericFormField />
        <br />
        <br />
        <br />
        <PingObservable />
        <br />
        <br />
        <br />
        <TypingGame />
      </div>
    );
  }
}

App.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  welcome: PropTypes.string,
  myStr: PropTypes.string,
};

App.defaultProps = {
  myStr: 'Count is',
  welcome: 'Welcome!',
};

function mapState(...rest) {
  console.log('mapState ...rest', rest);

  const [arg1] = rest;
  return {
    count: arg1.global.count,
  };
}

function increment(...args) {
  console.log('hi inc here');
  console.log('increment ...args', args);
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
