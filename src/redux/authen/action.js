import {createAction} from '@reduxjs/toolkit';

const PREFIX = 'AUTHEN/';
export const SET_API_KEY = PREFIX + 'SET_API_KEY';
export const LOGIN_SUCCESS = PREFIX + 'LOGIN_SUCCESS';
export const LOG_OUT = PREFIX + 'LOGOUT';
export const CHECK_AUTH = PREFIX + 'CHECK_AUTH';

const setApiKey = createAction(SET_API_KEY);
const loginSuccess = createAction(LOGIN_SUCCESS);
const logOut = createAction(LOG_OUT);
const checkAuth = createAction(CHECK_AUTH);

export {setApiKey, loginSuccess, logOut, checkAuth};
