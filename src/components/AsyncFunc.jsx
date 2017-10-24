import React, { Component } from 'react';

class AsyncFunc extends Component {
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
    return (
      <div>
        <input
          type="button"
          value="Async Await"
          onClick={this.asyncAwait}
        />
      </div>
    );
  }

}

export default AsyncFunc;
