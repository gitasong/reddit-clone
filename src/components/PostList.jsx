import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function PostList(props) {
  return (
    <div>
      <hr/>
      {props.postList.map((post, index) =>
        <Post title={post.title}
        timestamp={post.timestamp}
        author={post.author}
        content={post.content}
        votes={post.votes}
        key={index}></Post>
      )}
    </div>
  );
}

PostList.PropTypes = {
  postList: PropTypes.array
}

export default PostList;
