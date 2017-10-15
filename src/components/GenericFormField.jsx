import React, { PureComponent } from 'react';


class GenericFormField extends PureComponent {
  state = {
    queryStr: '',
    submitPressed: false,
  }
  setQueryStr = (e) => {
    this.setState({
      submitPressed: false,
      queryStr: e.target.value,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitPressed: true });
    console.log('queryStr Submitted', this.state.queryStr);
  }
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
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
      </form>
    );
  }
}

export default GenericFormField;
