import * as actions from './actions';
import * as actionTypes from './actionTypes';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);
describe('actions', () => {
    it('sets search field', () => {
        const text = 'hello';
        const testAction = {
            type: actionTypes.SET_SEARCH_FIELD,
            payload: text,
        };
        expect(actions.setSearchField(text)).toEqual(testAction);
    });
    it('requests robots', () => {
        const store = mockStore();
        store.dispatch(actions.getRobots());
        const action = store.getActions();
        const testAction = {
            type: actionTypes.REQUEST_PENDING
        };
        expect(action[0]).toEqual(testAction);
    });
});