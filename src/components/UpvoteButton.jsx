import React from "react";
import PropTypes from "prop-types";

function UpvoteButton(props) {
  return (
    <div>
      <button id="upvote" onClick={() => {props.upvote(props.id)}}>Upvote</button>
    <button id="downvote" onClick={() => {props.downvote(props.id)}}>Downvote</button>
    </div>
  );
}

UpvoteButton.propTypes = {
  upvote: PropTypes.func,
  downvote: PropTypes.func
};

export default UpvoteButton;
