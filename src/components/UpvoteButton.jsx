import React from "react";
import PropTypes from "prop-types";

function UpvoteButton(props) {
  return (
    <div>
      <button id="upvote" onClick={() => {props.upvote(props.votes)}}>Upvote</button>
      <button id="downvote" onClick={() => {props.downvote(props.votes)}}>Downvote</button>
    </div>
  );
}

UpvoteButton.propTypes = {
  upvote: PropTypes.func,
  downvote: PropTypes.func
};

export default UpvoteButton;
