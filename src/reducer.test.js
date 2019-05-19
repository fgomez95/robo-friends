import * as actionTypes from './actionTypes';
import reducer from './reducer';
let initialState;

describe('searchRobots', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      searchField: '',
      robots: [],
      error: false,
      loading: false,
      errorMessage: '',
    });
  });
  it('should handle change search field', () => {
    initialState = {searchField: ''}
    expect(reducer(initialState, {
      type: actionTypes.SET_SEARCH_FIELD,
      payload: 'hello'
    })).toEqual({
      searchField: 'hello'
    });
  });
});