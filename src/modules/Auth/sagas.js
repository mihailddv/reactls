import { fork, call, take, put, cancel, cancelled } from 'redux-saga/effects';
import { authRequest, authSuccess, authError, logoutRequest, logoutSuccess } from './actions';
import { auth } from './api'; 

function *loginFlow() {
    while(true) {
        const request = yield take(authRequest);
        const { user, password } = request.payload;
        const task = yield fork(authorize, user, password);
        const action = yield take([logoutRequest, authError]);

        if(action.type === logoutRequest.toString()) {
            yield cancel(task);
            yield put(logoutSuccess());
        }
    }
}

const handleCancel = () => {

}

function *authorize(name, password) {
    try {
        const token = yield call(auth, name, password);
        yield put(authSuccess(token));
    } catch(error) {
        const { message } = error;
        yield put(authError(message));
    } finally {
        if(yield cancelled()) {
            yield call(handleCancel);
        }
    }
}

export default loginFlow;