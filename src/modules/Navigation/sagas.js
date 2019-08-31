import { fork, call, takeEvery, put } from 'redux-saga/effects';
import {
  routeRequest,
  addressListRequest,
  routeSuccess,
  routeFailure,
  addressListSuccess,
  addressListFailure
} from './actions';
import { addressList, route } from './api';

function* addressListWatcher() {
  yield takeEvery(addressListRequest, addressListFlow);
}

function* routeWatcher() {
  yield takeEvery(routeRequest, routeFlow);
}

function* addressListFlow() {
  try {
    const response = yield call(addressList);
    yield put(addressListSuccess(response));
  } catch (error) {
    yield put(addressListFailure(error));
  }
}

function* routeFlow(action) {
  try {
    const { address1, address2 } = action.payload;
    const response = yield call(route, address1, address2);
    yield put(routeSuccess({ route: response, address1, address2 }));
  } catch (error) {
    yield put(routeFailure(error));
  }
}

export default function*() {
  yield fork(addressListWatcher);
  yield fork(routeWatcher);
}
