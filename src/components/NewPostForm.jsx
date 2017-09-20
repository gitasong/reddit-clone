import React from "react";

function NewPostForm() {
  return (
    <form>
      <input
          ref="_title"
          type="text"
          id="title"
          placeholder="Post Title"/>
          <input
          ref="_author"
          type="text"
          id="author"
          placeholder="Author Alias"/>
          <textarea
          ref="_content"
          id="content"
          placeholder="Your scintillating content goes here."/>
        <button type="submit">Post</button>
    </form>
  );
}

export default NewPostForm;
