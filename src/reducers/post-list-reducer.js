export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
      const { title, timestamp, author, content, votes, id } = action;
      return [
        ...state,
        {
          title: title,
          timestamp: timestamp,
          author: author,
          content: content,
          votes: votes,
          id: id
        }
      ]
    case 'UPVOTE':
      let upvotedState = state.slice();
      for (var i = 0; i < upvotedState.length; i ++){
        if (upvotedState[i].id === action.id) {
          upvotedState[i].votes++;
        }
      }
      return upvotedState;
    case 'DOWNVOTE':
      let downvotedState = state.slice();
      for (var i = 0; i < downvotedState.length; i ++){
        if (downvotedState[i].id === action.id) {
          downvotedState[i].votes--;
        }
      }
      return downvotedState;
    default:
      return state;
  }
}
