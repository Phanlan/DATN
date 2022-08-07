import {put, takeEvery} from '@redux-saga/core/effects';
import {isEmpty} from 'lodash-es';
import authService from '../../service/authService';
import {checkAuth, loginSuccess} from './action';

function* checkAuthSaga() {
  const apiKey = authService.getApiKeyLocalStorage();
  console.log('aaaaaa', apiKey);
  if (!isEmpty(apiKey)) {
    yield put(loginSuccess());
  }
}

export function* authSaga() {
  yield takeEvery(checkAuth, checkAuthSaga);
}
