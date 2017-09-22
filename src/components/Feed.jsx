import React from "react";
import PostList from "./PostList";
import NewPostForm from "./NewPostForm";
import { connect } from "react-redux";

class Feed extends React.Component {

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <div>
        <NewPostForm></NewPostForm>
        <PostList postList={this.props.masterPostList}></PostList>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    masterPostList: state
  }
}

export default connect(mapStateToProps)(Feed);
