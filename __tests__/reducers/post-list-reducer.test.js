import postList from './../../src/reducers/post-list-reducer';
import constants from './../../src/constants';

describe("Post list reducer", () => {
  let action;
  const postInfo = {
    title: "Redux is badass",
    timestamp: 4500000000000,
    author: "superWebDev",
    content: "Redux makes changing state a snap. You should use it!"
    votes: 7,
    id: 0
  };

  test('should return equivalent state if no action is recognized', () => {
    expect(postList([], { type: null})).toEqual([]);
  });

});
