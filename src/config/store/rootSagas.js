import {all} from 'redux-saga/effects';
import {AuthenOverallRedux} from '../../redux';

export default function* watch() {
  yield all([AuthenOverallRedux.Saga.authSaga()]);
}
