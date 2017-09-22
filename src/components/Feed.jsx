import React from "react";
import PostList from "./PostList";
import NewPostForm from "./NewPostForm";

class Feed extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NewPostForm></NewPostForm>
        <PostList></PostList>
      </div>
    );
  }
}

export default Feed;
