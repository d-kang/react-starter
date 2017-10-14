import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0,
  };

  myStr = 'counter1';

  addCount = () => {
    this.setState({ count: this.state.count += 1 });
  }

  render = () => (
    <div>
      <div>{ `${this.myStr} ${this.state.count}` }</div>
      <input
        type="button"
        value="button"
        onClick={this.addCount}
      />
    </div>
  )
}

export default App;
