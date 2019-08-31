import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  saveProfileRequest,
  saveProfileSuccess,
  saveProfileFailure
} from './actions';

const profile = handleActions(
  {
    [saveProfileRequest]: () => {},
    [saveProfileSuccess]: (state, action) => action.payload,
    [saveProfileFailure]: () => {}
  },
  {}
);

const error = handleActions(
  {
    [saveProfileFailure]: (state, action) => action.payload,
    [saveProfileSuccess]: () => '',
    [saveProfileRequest]: () => ''
  },
  ''
);

const isLoading = handleActions(
  {
    [saveProfileRequest]: () => true,
    [saveProfileSuccess]: () => false,
    [saveProfileFailure]: () => false
  },
  false
);

export default combineReducers({ profile, error, isLoading });
