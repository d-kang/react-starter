import React, { Component } from 'react';

class AsyncFunc extends Component {
  state = {
    logs: '',
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
      .then((res) => this.setState({log: res}))
      .catch((res) => this.setState({log: res}));
    breath(500)
      .then((res) => this.setState({log: res}))
      .catch((res) => this.setState({log: res}));
    breath(400)
      .then((res) => this.setState({log: res}))
      .catch((res) => this.setState({log: res}));
    breath(600)
      .then((res) => this.setState({log: res}))
      .catch((res) => this.setState({log: res}));

      const context = this;
    async function go() {
      try {
        console.log('start');
        console.log('this', context)
        context.setState({log: 'start'})
        const res = await breath(6000);
        console.log('res', res);
        context.setState({log: res})
        const res2 = await breath(7000);
        console.log('res2', res2);
        context.setState({log: res2})
        const res3 = await breath(10000);
        console.log('res3', res3);
        context.setState({log: res3})
        const res4 = await breath(10000);
        console.log('res4', res4);
        context.setState({log: res4})
        console.log('end');
        context.setState({log: 'end'})
      } catch (err) {
        console.log('Ohhhh nooo!!!!');
        context.setState({log: 'Ohhhh nooo!!!!'})
        console.log(err);
        context.setState({log: err})
      }
    }
    go();
  }
  render() {
    return (
      <div>
        <input
          type="button"
          value="Async Await"
          onClick={this.asyncAwait}
        />
        {this.state.log}
      </div>
    );
  }

}

export default AsyncFunc;
