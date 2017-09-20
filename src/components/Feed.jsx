import React from "react";
import PostList from "./PostList";
import NewPostForm from "./NewPostForm";

function Feed() {
  return (
    <div>
      <NewPostForm></NewPostForm>
      <PostList></PostList>
    </div>
  );
}

export default Feed;
