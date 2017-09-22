export default (state = [], action) => {
  switch (action.type) {
    case: 'ADD_POST':
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
    default:
      return state;
  }
}
