import React, { PureComponent } from 'react';


class GenericFormField extends PureComponent {
  state = {
    queryStr: '',
    savedSearchInput: '',
    submitWasPressed: false,
    githubResponse: {},
  }
  setQueryStrOnChange = (e) => {
    this.setState({
      submitWasPressed: false,
      queryStr: e.target.value,
    });
  }
  fetchGithubData = (e) => {
    e.preventDefault();
    const user = this.state.queryStr;
    this.setState({
      submitWasPressed: true,
      queryStr: '',
      savedSearchInput: user,
    });
    const self = this;

    async function go() {
      try {
        const response = await fetch(`https://api.github.com/users/${user}`);
        console.log('response', response);
        const jsonData = await (response.json());
        console.log('jsonData', jsonData);
        self.setState({ githubResponse: jsonData });
      } catch (err) {
        console.log('Ohhhh nooo!!!!');
        console.log(err);
      }
    }
    
    go();

    // .then(res => res.json())
    // .then((res) => {
    //   console.log('res', res);
    //   this.setState({ githubResponse: res });
    // });


  }
  render() {
    return (
      <form
        onSubmit={this.fetchGithubData}
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
        {JSON.stringify(this.state.githubResponse)}
      </form>
    );
  }
}

export default GenericFormField;
