import postList from './../../src/reducers/post-list-reducer';

describe("Post list reducer", () => {
  test('should return equivalent state if no action is recognized', () => {
    expect(postList([], { type: null})).toEqual([]);
  });

  test('imported value should match action type string', () => {
    expect(constants.ADD_POST).toEqual('action ADD_POST has been successfully imported');
  });

});
