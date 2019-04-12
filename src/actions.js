import * as actionTypes from './actionTypes';

export const setSearchField = (text) => ({
    type: actionTypes.SET_SEARCH_FIELD,
    payload: text
});

export const setRobots = (data) => ({
    type: actionTypes.SET_ROBOTS,
    payload: data,
});