import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GenericFormField from './GenericFormField';
import Counter from './Counter';
import Display from './Display';
import Welcome from './Welcome';
import AsyncFunc from './AsyncFunc';

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
        <Display {...this.props} />
        <Counter {...this.props} />
        <AsyncFunc {...this.props} />
        <GenericFormField />
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
  welcome: 'Welcome!!',
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
