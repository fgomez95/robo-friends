import * as actionTypes from './actionTypes';

const initialState = {
  textField: ''  
};

const reducer = (state=initialState, action) => {
  switch(action.type){
      case actionTypes.SET_TEXT_FIELD:
          console.log('fuck you!', action.payload);
          break;
  }  
};

export default reducer;