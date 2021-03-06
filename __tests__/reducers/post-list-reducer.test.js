import postList from './../../src/reducers/post-list-reducer';
import constants from './../../src/constants';

describe("Post list reducer", () => {
  let action;
  const postInfo = {
    title: "Redux is badass",
    timestamp: 4500000000000,
    author: "superWebDev",
    content: "Redux makes changing state a snap. You should use it!",
    votes: 0,
    id: 0
  };

  test('should return equivalent state if no action is recognized', () => {
    expect(postList([], { type: null})).toEqual([]);
  });

  test('should add post to post array', () => {
    const { title, timestamp, author, content, votes, id } = postInfo;
    action = {
      type: constants.ADD_POST,
      title: title,
      timestamp: timestamp,
      author: author,
      content: content,
      votes: votes,
      id: id
    };
    const futureState = [ postInfo ];
    expect(postList([], action)).toEqual([postInfo]);
  });

  test('should increment post votes by 1', () => {
    const { title, timestamp, author, content, votes, id } = postInfo;
    action = {
      type: constants.UPVOTE,
      id: id
    };
    const afterUpvote = {
      title: "Redux is badass",
      timestamp: 4500000000000,
      author: "superWebDev",
      content: "Redux makes changing state a snap. You should use it!",
      votes: 1,
      id: 0
    };
    expect(postList([postInfo], action)).toEqual([afterUpvote]);
  });

  test('should decrement post votes by 1', () => {
    const { title, timestamp, author, content, votes, id } = postInfo;
    action = {
      type: constants.DOWNVOTE,
      id: id
    };
    const afterDownvote = {
      title: "Redux is badass",
      timestamp: 4500000000000,
      author: "superWebDev",
      content: "Redux makes changing state a snap. You should use it!",
      votes: 0,  // state changes are cumulative in tests
      id: 0
    };
    expect(postList([postInfo], action)).toEqual([afterDownvote]);
  });

});
