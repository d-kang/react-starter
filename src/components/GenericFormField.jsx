import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class GenericFormField extends PureComponent {
  state = {
    queryStr: '',
    savedSearchInput: '',
    submitWasPressed: false,
  }
  setQueryStrOnChange = (e) => {
    this.setState({
      submitWasPressed: false,
      queryStr: e.target.value,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const user = this.state.queryStr;
    this.setState({
      submitWasPressed: true,
      queryStr: '',
      savedSearchInput: user,
    });
    const self = this;
    async function go() {
      const response = await fetch(`https://api.github.com/users/${user}`);
      const data = await (response.json());
      self.props.fetchGithubData(data);
    }
    go()
      .catch((err) => {
        console.error('Uh oh!! Something went wrong');
        console.error(err);
      });
  }
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        action=""
      >
        <input
          onChange={this.setQueryStrOnChange}
          type="text"
        />
        <button>Form Button</button>
        <br />
        {!this.state.submitWasPressed
          ? `Text Input: ${this.state.queryStr}`
          : `You Searched For User: ${this.state.savedSearchInput}`}
        <br />
        {JSON.stringify(this.props.githubResponse)}
      </form>
    );
  }
}


function fetchGithubData(githubResponse) {
  return {
    type: 'FETCH_GITHUB_DATA',
    githubResponse,
  };
}

function mapState(state) {
  return {
    githubResponse: state.async.githubResponse,
  };
}


export default connect(mapState, { fetchGithubData })(GenericFormField);
