import * as actionTypes from './actionTypes';

export const setSearchField = (text) => ({
    type: actionTypes.SET_SEARCH_FIELD,
    payload: text
});