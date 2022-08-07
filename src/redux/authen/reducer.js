import {createReducer} from '@reduxjs/toolkit';
import * as Actions from './action';

const initialState = {
  apiKey: '',
  isLogin: false,
};

const authReducer = createReducer(initialState, {
  [Actions.setApiKey]: (state, action) => {
    state.apiKey = action.payload;
  },
  [Actions.loginSuccess]: (state, action) => {
    state.isLogin = true;
  },
  [Actions.logOut]: (state, action) => {
    state.isLogin = false;
  },
});

export default authReducer;
