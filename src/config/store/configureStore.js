import {createStore, applyMiddleware} from 'redux';
import createMiddlewareSaga from 'redux-saga';
// import { createLogger } from "redux-logger";
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducers} from './rootReducer';
import rootSagas from './rootSagas';

// setup middleware
const sagaMiddleware = createMiddlewareSaga();
const middleware = [
  sagaMiddleware,
  //  createLogger()
];

const configureStore = createStore(rootReducers, composeWithDevTools(applyMiddleware(...middleware)));
sagaMiddleware.run(rootSagas);

export default configureStore;
