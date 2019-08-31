import { fork, takeLatest, call, put } from "redux-saga/effects";
import { updateError, loginIn, loginOut } from "./actions";
import { save, storageLoggedIn } from "../../storage";
import { loadData } from "./api";

const messageServer = {
  "Неверный пароль": "password",
  "Неверное имя пользователя": "login"
};

function* fetchSearchData(action) {
  const { type, payload } = action;

  try {
    const response = yield call(loadData, payload);

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
    console.log(error);
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