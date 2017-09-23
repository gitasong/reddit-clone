import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

// var masterPostList = [
//   {
//     title: "Redux is badass",
//     timestamp: 4500000000000,
//     author: "superWebDev",
//     content: "Redux makes changing state a snap. You should use it!",
//     votes: 7,
//     id: 0
//   },
//   {
//     title: "React sucks",
//     timestamp: 1200000000000,
//     author: "webNewbie",
//     content: "React is hard! Use Angular instead.",
//     votes: 14,
//     id: 1
//   }
// ];

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
        key={post.id}
        upvote={props.upvote}
        downvote={props.downvote}></Post>
      )}
    </div>
  );
}

PostList.PropTypes = {
  postList: PropTypes.array,
  upvote: PropTypes.func,
  downvote: PropTypes.func
}

export default PostList;
