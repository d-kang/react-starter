import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GenericFormField from './GenericFormField';
import Counter from './Counter';
import Display from './Display';

export class App extends Component {
  state = {
    hasError: false,
  }
  componentDidCatch(err, info) {
    this.setState({ hasError: true });
    console.log('1111111', err, info);
  }
  asyncAwait = () => {
    console.log('asyncAwait RAN!!');
    function breath(amount) {
      return new Promise((resolve, reject) => {
        if (amount < 500) {
          reject('That is too small of a value');
        }
        setTimeout(() => resolve(`Done for ${amount} ms`), amount);
      });
    }
    breath(20)
      .then(console.log)
      .catch(console.error);
    breath(500)
      .then(console.log)
      .catch(console.error);
    breath(400)
      .then(console.log)
      .catch(console.error);
    breath(600)
      .then(console.log)
      .catch(console.error);


    async function go() {
      try {
        console.log('start');
        const res = await breath(6000);
        console.log('res', res);
        const res2 = await breath(7000);
        console.log('res2', res2);
        const res3 = await breath(10000);
        console.log('res3', res3);
        const res4 = await breath(10000);
        console.log('res4', res4);
        console.log('end');
      } catch (err) {
        console.log('Ohhhh nooo!!!!');
        console.log(err);
      }
    }
    go();
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    console.log('<App /> this', this);
    return (
      <div>
        <h1>{this.props.welcome}</h1>
        <div>
          <Display {...this.props}/>
        </div>
        <Counter {...this.props} />
        <input
          type="button"
          value="Async Await"
          onClick={this.asyncAwait}
        />
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
