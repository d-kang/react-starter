import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class App extends Component {
  // static propTypes = {
  //   addCount: PropTypes.func,
  //   subCount: PropTypes.func,
  //   count: PropTypes.number.isRequired,
  // }
  state = {
    hasError: false,
    orange: 'bananas',
  }
  componentDidCatch(err, info) {
    this.setState({ hasError: true });
    console.log('1111111', err, info);
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
        const res = await breath(1000);
        console.log('res', res);
        const res2 = await breath(1000);
        console.log('res2', res2);
        const res3 = await breath(1000);
        console.log('res3', res3);
        const res4 = await breath(1000);
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
    return (
      <div>
        <h1>{this.props.welcome}</h1>
        <div>
          {`${this.props.myStr} ${this.props.count} ${this.state.orange}` }
        </div>
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
        <input
          type="button"
          value="Async Await"
          onClick={this.asyncAwait}
        />
      </div>
    );
  }
}

App.propTypes = {
  count: PropTypes.number.isRequired,
  myStr: PropTypes.string,
  welcome: PropTypes.string,
};

App.defaultProps = {
  myStr: 'Count is',
  welcome: 'Welcome!!!',
};


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
