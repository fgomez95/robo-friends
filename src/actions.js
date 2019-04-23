import * as actionTypes from './actionTypes';

export const setSearchField = (text) => ({
    type: actionTypes.SET_SEARCH_FIELD,
    payload: text
});

export const getRobots = () => dispatch => {
    dispatch({ type: actionTypes.REQUEST_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(result => dispatch({
            type: actionTypes.REQUEST_SUCCESS,
            payload: result
        }))
        .catch(err => {
            dispatch({
                type: actionTypes.REQUEST_FAILED,
                payload: err,
            });
        });
}