import React, { Component } from 'react';

class TypingGame extends Component {
  state = {
    sentence: 'the cat in the hat',
    typer: '',
  }

  handleInput = (e) => {
    const val = e.target.value;
    console.log('e.target.value', val);
    this.setState({typer: val}, function() {
      if (this.state.sentence.startsWith(this.state.typer)) {
        const length = this.state.typer.length;
        console.log('true')
      } else {
        console.log('false')
      }
    });
    console.log('this.state.typer', this.state.typer)

  }

  render() {
    return (
      <div>
        <form action="">
          Type the Text <br />
          <input
            type="text"
            onChange={this.handleInput}
          />
          <br />
          {this.state.sentence} <br />
          {this.state.typer}
        </form>

      </div>
    );
  }

}

export default TypingGame;
