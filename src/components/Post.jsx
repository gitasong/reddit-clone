import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";
import UpvoteButton from "./UpvoteButton";


function Post(props) {

  return (
    <div>
      <h3>{props.title}</h3>
      <small>{props.timestamp}</small>
      <h5><em>{props.author}</em></h5>
      <p>{props.content}</p>
      <h5>Votes: {props.votes}</h5>
      <UpvoteButton upvote={props.upvote}
      downvote={props.downvote} id={props.id}></UpvoteButton>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  upvote: PropTypes.func,
  downvote: PropTypes.func,
  id: PropTypes.string
}

export default Post;
