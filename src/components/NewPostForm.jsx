import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class NewPostForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
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
