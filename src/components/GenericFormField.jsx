import React, { PureComponent } from 'react';


class GenericFormField extends PureComponent {
  state = {
    queryStr: '',
    submitPressed: false,
    githubResponse: {},
  }
  setQueryStr = (e) => {
    this.setState({
      submitPressed: false,
      queryStr: e.target.value,
    });
  }
  handleSubmit = (e) => {
    console.log('queryStr Submitted', );
  }
  fetchGithubData = (e) => {
    e.preventDefault();
    const user = this.state.queryStr;
    this.setState({
      submitPressed: true,
      queryStr: '',
    });
    fetch(`https://api.github.com/users/${user}`)
      .then(res => res.json())
      .then((res) => {
        console.log('res', res);
        this.setState({ githubResponse: res });
      });
  }
  render() {
    return (
      <form
        onSubmit={this.fetchGithubData}
        action=""
      >
        <input
          onChange={this.setQueryStr}
          type="text"
        />
        <button>Form Button</button>
        <br />
        {!this.state.submitPressed ? 'Text Input:' : 'Text Submitted:'}
        {'  '}{this.state.queryStr}
        <br />
        {JSON.stringify(this.state.githubResponse)}
      </form>
    );
  }
}

export default GenericFormField;
