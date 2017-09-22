import postList from './../../src/reducers/post-list-reducer';
import constants from './../../src/constants';

describe("Post list reducer", () => {
  test('should return equivalent state if no action is recognized', () => {
    expect(postList([], { type: null})).toEqual([]);
  });

});
