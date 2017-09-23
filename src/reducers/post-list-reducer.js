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
      let upState = state.slice();
      for (var i = 0; i < upState.length; i ++){
        if (upState[i].id === action.id) {
          upState[i].upvotes++;
        }
      }
      return upState;
    default:
      return state;
  }
}
