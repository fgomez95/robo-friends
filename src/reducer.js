import * as actionTypes from './actionTypes';

const initialState = {
  searchField: '',
  robots: [],
  error: false,
  loading: false,
  errorMessage: '',
};

const reducer = (state=initialState, action) => {
  switch(action.type){
      case actionTypes.SET_SEARCH_FIELD:
        return {
          ...state,
          searchField: action.payload
        };
      case actionTypes.REQUEST_FAILED:
        return {
          ...state,
          error: true,
          message: action.payload
        };
      case actionTypes.REQUEST_SUCCESS:
        return {
          ...state,
          error: false,
          message: '',
          robots: action.payload,
          loading: false,
        };
      case actionTypes.REQUEST_PENDING:
        return {
          ...state,
          error: false,
          message: '',
          loading: true,
        };
      default: 
        return state;
  }  
};

export default reducer;