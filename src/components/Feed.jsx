import React from "react";
import PostList from "./PostList";
import NewPostForm from "./NewPostForm";
import { connect } from "react-redux";
import constants from "./../constants";
import PropTypes from "prop-types";

class Feed extends React.Component {

  constructor(props) {
    console.log(props);
    super(props);
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
  }

  upvote(postID) {
    const { dispatch } = props;
    const action = {
      type: constants.UPVOTE,
      id: postID
    }
  }

  downvote(postID) {
    const { dispatch } = props;
    const action = {
      type: constants.DOWNVOTE,
      id: postID
    }
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <div>
        <NewPostForm></NewPostForm>
        <PostList postList={this.props.masterPostList} upvote={this.upvote} downvote={this.downvote}></PostList>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterPostList: state
  }
}

export default connect(mapStateToProps)(Feed);
