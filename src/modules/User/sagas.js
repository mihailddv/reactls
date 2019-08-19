import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { getApiKey } from '../Auth';
import { getUserInfo } from './api';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';

function* fetchUserWatcher() {
  yield takeLatest(fetchRequest, fetchUserFlow);
}

export function* fetchUserFlow(action) {
  try {
    const apiKey = yield select(getApiKey);
    const result = yield call( getUserInfo, apiKey, action.payload );
    yield put(fetchSuccess(result));
  } catch (event) {
    yield put(fetchFailure(event));
  }
}

export default function*() {
  yield fork(fetchUserWatcher);
}