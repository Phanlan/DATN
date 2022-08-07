import {combineReducers} from 'redux';
import authReducer from '../../redux/authen/reducer';

export const rootReducers = combineReducers({
  authReducer,
});
