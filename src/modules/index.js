import { fork } from 'redux-saga/effects';
import { sagas as profileSagas } from './Profile';
import { sagas as loginSagas } from './Auth';
import { sagas as selectSagas } from './SelectBlock';

export default function* rootSaga() {
  yield fork(profileSagas);
  yield fork(loginSagas);
  yield fork(selectSagas);
}
