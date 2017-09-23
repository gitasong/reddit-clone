import React from "react";
import PropTypes from "prop-types";

function UpvoteButton(props) {
  return (
    <div>
      <button id="upvote">Upvote</button>
      <button id="downvote">Downvote</button>
    </div>
  );
}

export default UpvoteButton;
