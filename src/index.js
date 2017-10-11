class App extends React.Component {
  state = {
    count: 0
  };

  myStr = 'counter';

  addCount = () => this.setState({ count: this.state.count += 1 });

  render = () =>
    <div>
      <div>{ this.myStr + ' ' + this.state.count}</div>
      <input
        type="button"
        value='button'
        onClick={this.addCount}
      />
    </div>;
}

ReactDOM.render(<App />, document.getElementById('root'));
