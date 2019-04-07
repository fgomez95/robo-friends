import * as actionTypes from './actionTypes';

export const setTextField = (text) => ({
    type: actionTypes.SET_TEXT_FIELD,
    payload: text
});