import React from "react";
import PropTypes from "prop-types";

function UpvoteButton(props) {
  return (
    <div>
      <button id="upvote" upvote={props.upvote}>Upvote</button>
      <button id="downvote" downvote={props.downvote}>Downvote</button>
    </div>
  );
}

UpvoteButton.propTypes = {
  upvote: PropTypes.func,
  downvote: PropTypes.func
};

export default UpvoteButton;
