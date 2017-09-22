import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import c from './../constants';

class NewPostForm extends React.Component {

  constructor(props) {
    console.log(props);
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(event) {
    event.preventDefault();
    const { _title, _author, _content } = this.refs;
    const { dispatch } = this.props;
    const action = {
      type: c.ADD_POST,
      id: id,
      title: _title.val,
      timestamp: new Date().getTime(),
      author: _author.val,
      content: _content.val,
      votes: 0,
    }
    console.log(action.id);
    dispatch(action);
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input
            ref="_title"
            type="text"
            id="title"
            placeholder="Post Title"/>
            <br/>
            <input
            ref="_author"
            type="text"
            id="author"
            placeholder="Author Alias"/>
            <br/>
            <textarea
            ref="_content"
            id="content"
            placeholder="Your scintillating content goes here."/>
            <br/>
          <button type="submit">Post</button>
      </form>
    );
  }
}

NewPostForm = connect()(NewPostForm);

export default NewPostForm;
