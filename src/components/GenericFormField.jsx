import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class GenericFormField extends PureComponent {
  state = {
    queryStr: '',
    savedSearchInput: '',
    submitWasPressed: false,
    // githubResponse: {},
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
      console.log('response', response);
      const data = await (response.json());
      console.log('data', data);
      // self.setState({ githubResponse: data });
      self.props.fetchGithubData(data);
    }
    go()
      .catch((err) => {
        console.error('Uh oh!! Something went wrong');
        console.error(err);
      });
    console.log('this.props', this.props);
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
  console.log('fetchGithubData action creator RAN');
  return {
    type: 'FETCH_GITHUB_DATA',
    githubResponse,
  };
}

function mapState(state) {
  console.log('mapped state to props in Generic Form Field')
  console.log('args', JSON.stringify(state))
  console.log('state', state)
  return {
    githubResponse: state.async.githubResponse,
  };
}


export default connect(mapState, { fetchGithubData })(GenericFormField);
