import { fork, takeLatest, call } from "redux-saga/effects";
import { saveProfile } from "./actions";
import { save, storagePaymentCard } from "../../storage";

function* saveCard(action) {
  const { payload } = action;
  yield call(save, storagePaymentCard, payload);
}

function* profileWatcher() {
  yield takeLatest(saveProfile, saveCard);
}


export default function* () {
  yield fork(profileWatcher);
}