import React from "react";
import PropTypes from "prop-types";


function Post() {
  return (
    <div>
      <h3>{props.title}</h3>
      <small>{props.timestamp}</small>
      <h5><em>{props.author}</em></h5>
      <p>{props.content}</p>
      <h5>Upvotes: {props.votes}</h5>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  timestamp: PropTypes.string,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
}

export default Post;
