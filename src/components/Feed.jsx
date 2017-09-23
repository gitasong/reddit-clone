import React from "react";
import PostList from "./PostList";
import NewPostForm from "./NewPostForm";
import { connect } from "react-redux";

class Feed extends React.Component {

  constructor(props) {
    super(props);
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
  }

  upvote(postID) {
    console.log("downvote");
    // console.log(postID);
    let newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.forEach(function(post) {
      if (post.id === postID) {
        post.votes++;
      }
    });
    this.setState({masterPostList: newMasterPostList});
  }

  downvote(postID) {
    console.log("upvote");
    // console.log(postID);
    let newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.forEach(function(post) {
      if (post.id === postID) {
        post.votes--;
      }
    });
    this.setState({masterPostList: newMasterPostList});
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
