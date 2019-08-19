import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { getApiKey } from '../Auth';
import { getFollowersInfo } from './api';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';

function* fetchFollowersWatcher() {
  yield takeLatest(fetchRequest, fetchFollowersFlow); // Замените вопросительный знак на подходящий экшен
}

export function* fetchFollowersFlow(action) {
  // Реализуйте загрузку данных
  // Используйте экшены FETCH_SUCCESS / FETCH_FAILURE

  try {
    const apiKey = yield select(getApiKey);
    const result = yield call(getFollowersInfo, apiKey, action.payload);
    yield put(fetchSuccess(result));
  } catch(event) {
    yield put (fetchFailure(event));
  }

}

export default function*() {
  yield fork(fetchFollowersWatcher);
}
