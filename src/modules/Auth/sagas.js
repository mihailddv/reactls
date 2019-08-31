import {
  fork, takeLatest, call, put
} from "redux-saga/effects";
import { loadData } from "./api";
import { updateError, loginIn, loginOut } from "./actions";
import { save, storageLoggedIn } from "../../storage";

// Для точной подсказки пользователю, какое поле невалидно
const messageServer = {
  "Неверный пароль": "password",
  "Неверное имя пользователя": "login"
};

function* fetchSearchData(action) {
  const { type, payload } = action;
  try {
    const response = yield call(loadData, payload);
    // payload Redux-form
    const loginForm = {
      meta: {
        form: "loginForm"
      },
      payload: {
        syncErrors: {
          [messageServer[response.error]]: response.error
        }
      }
    };
    const success = response.success;
    yield call(save, storageLoggedIn, response.success);
    yield put({ type: updateError.toString(), ...loginForm });
    yield put({ type, success });
  } catch (error) {
    // console.log(error);
  }
}

function* fetchLogIn(action) {
  yield fork(fetchSearchData, action);
}

function* clearStorage() {
  yield call(save, storageLoggedIn, false);
}

function* loginWatcher() {
  yield takeLatest(loginIn, fetchLogIn);
  yield takeLatest(loginOut, clearStorage);
}


export default function* () {
  yield fork(loginWatcher);
}