import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';
import auth, { sagas as AuthSagas } from './Auth';
import navigation, { sagas as NavigationSaga } from './Navigation';
import profile from './Profile';

export default combineReducers({ auth, profile, navigation });

export function* rootSaga() {
    yield fork(AuthSagas);
    yield fork(NavigationSaga);
}