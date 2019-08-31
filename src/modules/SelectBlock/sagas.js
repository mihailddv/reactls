import {
  fork, takeLatest, call, put
} from "redux-saga/effects";
import {
  fetchRequest, fetchSuccess, fetchFail, fetchAddress, fetchAddressSuccess
} from "./actions";
import { loadData } from "./api";

function* fetchOptions() {
  try {
    const { addresses } = yield call(loadData, "addressList");
    yield put({ type: `${fetchSuccess.toString()}`, payload: addresses });
  } catch (error) {
    yield put({ type: `${fetchFail.toString()}`, payload: `${error.name} - ${error.message}` });
  }
}

function* fetchRoutes(action) {
  const { from, to } = action.payload;
  try {
    const path = `route?address1=${from}&address2=${to}`;
    const payload = yield call(loadData, path);
    yield put({ type: `${fetchAddressSuccess.toString()}`, payload });
  } catch (error) {
    yield put({ type: `${fetchFail.toString()}`, payload: `${error.name} - ${error.message}` });
  }
}

function* selectWatcher() {
  yield takeLatest(fetchRequest, fetchOptions);
  yield takeLatest(fetchAddress, fetchRoutes);
}


export default function* () {
  yield fork(selectWatcher);
}